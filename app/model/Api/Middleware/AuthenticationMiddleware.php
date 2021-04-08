<?php declare(strict_types = 1);

namespace App\Model\Api\Middleware;

use App\Model\Api\RequestAttributes;
use App\Model\Api\Response\BaseError;
use App\Model\Api\Response\Response;
use App\Model\Database\Entity\AccessRecord;
use App\Model\Database\Entity\User;
use App\Model\Database\EntityManager;
use Contributte\Middlewares\IMiddleware;
use Contributte\Middlewares\Security\IAuthenticator;
use DateTime;
use Nette\Utils\Json;
use Nette\Utils\Strings;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class AuthenticationMiddleware implements IMiddleware
{

  private const AUTH_ROUTES = [ '/api/admin' ];

  public function __construct(private IAuthenticator $authenticator, private EntityManager $em)
  {
  }

  /**
   * Authenticate user from given request
   *
   * @param ServerRequestInterface $request
   * @param ResponseInterface $response
   * @param callable $next
   * @return ResponseInterface
   */
  public function __invoke(ServerRequestInterface $request, ResponseInterface $response, callable $next): ResponseInterface
  {
    if (!$this->isAuth($request)) return $next($request, $response);

    /** @var User $user */
    $user = $this->authenticator->authenticate($request);
    if (!$user) return $this->unauthorized($response);

    $request = $request->withAttribute(RequestAttributes::APP_LOGGED_USER, $user);

    /**
     * Log request
     */

    $record = (new AccessRecord())
      ->setEndpoint($request->getUri()->getPath())
      ->setIp($request->getRequestTarget())
      ->setUser($user)
      ->setCreatedAt(new DateTime());

    $this->em->persist($record);
    $this->em->flush();

    return $next($request, $response);
  }

  protected function isAuth(ServerRequestInterface $request): bool
  {
    foreach (self::AUTH_ROUTES as $whitelist) {
      if (Strings::startsWith($request->getUri()->getPath(), $whitelist)) return true;
    }

    return false;
  }

  protected function unauthorized(ResponseInterface $response): ResponseInterface
  {
    $response->getBody()->write(Json::encode(
      Response::err(BaseError::make("UNAUTHORIZED", "Missing auth token"))
    ));

    return $response
      ->withHeader('Content-Type', 'application/json');
  }

}
