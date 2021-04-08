<?php


namespace App\Module\V2;


use Apitte\Core\Annotation\Controller\Path;
use JetBrains\PhpStorm\Pure;

class DefaultController extends BaseV2Controller
{

  /**
   * @Path("/")
   * @return array
   */
  #[Pure] public function index(): array
  {
    return $this->ok([
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
    ]);
  }

}
