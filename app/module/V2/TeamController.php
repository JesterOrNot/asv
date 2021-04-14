<?php declare(strict_types = 1);

namespace App\Module\V2;

use Apitte\Core\Annotation\Controller\Method;
use Apitte\Core\Annotation\Controller\OpenApi;
use Apitte\Core\Annotation\Controller\Path;
use Apitte\Core\Http\ApiRequest;
use App\Domain\Api\Facade\TeamFacade;
use App\Domain\Api\Response\TeamResDto;

/**
 * @Path("/team")
 */
class TeamController extends BaseV2Controller
{

  public function __construct(private TeamFacade $teamFacade)
  {
  }

  /**
   * @OpenApi("
   *   summary: List all team members.
   * ")
   * @Path("/list")
   * @Method("GET")
   * @param ApiRequest $req
   * @return TeamResDto[]
   */
  public function allTeamMembers(ApiRequest $req): array
  {
    return $this->ok([
      'teamMembers' => $this->teamFacade->findAll(),
    ]);
  }

}
