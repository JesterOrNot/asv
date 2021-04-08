<?php declare(strict_types = 1);

namespace App\Module;

use Apitte\Core\Annotation\Controller\Id;
use Apitte\Core\Annotation\Controller\Path;
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

  /**
   * Default action
   *
   * Sends all available endpoints
   *
   * @Path("/")
   * @return array
   */
  #[Pure] public function endpoints(): array
  {
    return $this->ok([
      "versions" => [
        "v1" => [
          "state" => "shutdown"
        ],
        "v2" => [
          "state" => "current",
          "main_endpoint" => "/v2",
          "endpoints" => [
            "GET_TEAM_MEMBERS" => "/team",
            "GET_PROJECTS" => "/project/all/:page=1",
            "GET_PROJECT" => "/project/:slug",
            "GET_SETTINGS" => "/settings"
          ]
        ]
      ]
    ]);
  }

  /**
   * The success response formatter.
   * Implements the response-spec.
   *
   * @param array $data
   * @return array
   */
  #[Pure] public function ok(array $data): array
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
