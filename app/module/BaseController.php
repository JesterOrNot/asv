<?php declare(strict_types = 1);

namespace App\Module;

use Apitte\Core\Annotation\Controller\Id;
use Apitte\Core\Annotation\Controller\Path;
use Apitte\Core\Http\ApiRequest;
use Apitte\Core\UI\Controller\IController;
use App\Model\Api\Response\BaseError;
use App\Model\Api\Response\Response;
use JetBrains\PhpStorm\Pure;

/**
 * @Path("/api")
 * @Id("base_api")
 */
abstract class BaseController implements IController
{

  public function __construct(protected ApiRequest $request)
  {
  }

  /**
   * The success response formatter.
   * Implements the response-spec.
   *
   * @param array $data
   * @return array
   */
  #[Pure]
  public function ok(array $data = [ 'message' => 'success' ]): array
  {
    return Response::ok($data);
  }

  /**
   * The error response formatter.
   * Implements the response-spec.
   *
   * @param BaseError $error
   * @return array
   */
  public function err(BaseError $error)
  {
    return Response::err($error);
  }

}
