<?php declare(strict_types = 1);

namespace App\Model\Api\Dispatcher;

use Apitte\Core\Dispatcher\JsonDispatcher as ApitteJsonDispatcher;
use Apitte\Core\Exception\Api\ClientErrorException;
use Apitte\Core\Exception\Api\ServerErrorException;
use Apitte\Core\Exception\Api\ValidationException;
use Apitte\Core\Handler\IHandler;
use Apitte\Core\Http\ApiRequest;
use Apitte\Core\Http\ApiResponse;
use Apitte\Core\Http\RequestAttributes;
use Apitte\Core\Router\IRouter;
use Apitte\Core\Schema\Endpoint;
use App\Model\Api\Response\BaseError;
use App\Model\Api\Response\Response;
use Doctrine\ORM\EntityNotFoundException;
use JetBrains\PhpStorm\Pure;
use Nette\Utils\Json;
use Nette\Utils\JsonException;
use RuntimeException;
use Symfony\Component\Serializer\Exception\ExtraAttributesException;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class JsonDispatcher extends ApitteJsonDispatcher
{
  protected SerializerInterface $serializer;

  protected ValidatorInterface $validator;

  #[Pure] public function __construct(IRouter $router, IHandler $handler, SerializerInterface $serializer, ValidatorInterface $validator)
  {
    parent::__construct($router, $handler);
    $this->serializer = $serializer;
    $this->validator = $validator;
  }

  /**
   * @param ApiRequest $request
   * @param ApiResponse $response
   * @return ApiResponse
   * @throws JsonException
   */
  protected function handle(ApiRequest $request, ApiResponse $response): ApiResponse
  {
    try {
      $request = $this->transformRequest($request);
      $result = $this->handler->handle($request, $response);

      // Except ResponseInterface convert all to json
      if (!($result instanceof ApiResponse)) {
        $response = $this->transformResponse($result, $response);
      } else {
        $response = $result;
      }
    } catch (ClientErrorException | ServerErrorException $e) {
      $data = Response::err(BaseError::make());

      if ($e->getMessage()) $data['error']['message'] = $e->getMessage();

      if ($e->getCode())
        $data['error']['kind'] = match ($e->getCode()) {
          400 => "VALIDATION",
          401 => "UNAUTHORIZED",
          403 => "FORBIDDEN",
          404 => "USER_INPUT",
        };

      $response = $response->withStatus($e->getCode() ?: 500)
        ->withHeader('Content-Type', 'application/json');

      $response->getBody()->write(Json::encode($data));
    } catch (RuntimeException $e) {
      $response = $response->withStatus($e->getCode() ?: 500)
        ->withHeader('Content-Type', 'application/json');

      $response->getBody()->write(Json::encode(Response::err(BaseError::make())));
    } catch (EntityNotFoundException $e) {
      $response = $response->writeJsonBody(Response::err(BaseError::make('USER_INPUT', $e->getMessage() ?: "Entity not found")));
    }

    return $response;
  }

  /**
   * Transform incoming request to request DTO, if needed.
   *
   * @param ApiRequest $request
   * @return ApiRequest
   */
  protected function transformRequest(ApiRequest $request): ApiRequest
  {
    // If Apitte endpoint is not provided, skip transforming.
    if (!($endpoint = $request->getAttribute(RequestAttributes::ATTR_ENDPOINT)))
      return $request;

    assert($endpoint instanceof Endpoint);

    if (!($entity = $endpoint->getTag('request.dto')))
      return $request;


    try {
      $dto = $this->serializer->deserialize(
        $request->getBody()->getContents(),
        $entity,
        'json',
        [ 'allow_extra_attributes' => false ]
      );

      $request = $request->withParsedBody($dto);
    } catch (ExtraAttributesException $e) {
      throw ValidationException::create()
        ->withMessage($e->getMessage());
    }

    $violations = $this->validator->validate($dto);

    if (count($violations) > 0) {
      $fields = [];
      foreach ($violations as $violation) {
        $fields[$violation->getPropertyPath()][] = $violation->getMessage();
      }

      throw ValidationException::create()
        ->withMessage('Invalid request data')
        ->withFields($fields);
    }

    return $request;
  }

  /**
   * @param mixed $data
   * @param ApiResponse $response
   * @return ApiResponse
   */
  protected function transformResponse(mixed $data, ApiResponse $response): ApiResponse
  {
    $response = $response->withStatus(200)
      ->withHeader('Content-Type', 'application/json');

    $serialized = $this->serializer->serialize($data, 'json');

    $response->getBody()->write($serialized);

    return $response;
  }
}
