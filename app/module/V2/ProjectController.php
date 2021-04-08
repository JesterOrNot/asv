<?php declare(strict_types=1);

namespace App\Module\V2;

use Apitte\Core\Annotation\Controller\Method;
use Apitte\Core\Annotation\Controller\OpenApi;
use Apitte\Core\Annotation\Controller\Path;
use Apitte\Core\Annotation\Controller\RequestParameters;
use Apitte\Core\Http\ApiRequest;
use App\Domain\Api\Facade\ProjectFacade;
use App\Domain\Api\Response\ProjectResDto;
use Doctrine\ORM\EntityNotFoundException;

/**
 * @Path("/project")
 */
class ProjectController extends BaseV2Controller
{

  public function __construct(private ProjectFacade $projectFacade)
  {
  }

  /**
   * @OpenApi("
   *   summary: List all projects.
   * ")
   * @Path("/list")
   * @Method("GET")
   * @RequestParameters({
   * 		@RequestParameter(name="limit", type="int", in="query", required=false, description="Data limit"),
   * 		@RequestParameter(name="page", type="int", in="query", required=false, description="Data offset")
   * })
   * @param ApiRequest $req
   * @return ProjectResDto[]
   */
  public function allProjects(ApiRequest $req): array
  {
    $limit = $req->getParameter("limit", 10);
    $page = $req->getParameter("page", 1);
    $offset = ($page - 1) * $limit;

    return $this->ok([
      "projects" => $this->projectFacade->findAll($limit, $offset)
    ]);
  }

  /**
   * @OpenApi("
   *   summary: Get project by id/slug.
   * ")
   * @Path("")
   * @Method("GET")
   * @RequestParameters({
   * 		@RequestParameter(name="id", type="int", in="query", required=false, description="ID/Slug")
   * })
   * @param ApiRequest $req
   * @return ProjectResDto[]
   * @throws EntityNotFoundException
   */
  public function getProject(ApiRequest $req): array
  {
    $id = $req->getParameter("id");

    // Querying by slug first as that is used in the frontend.
    $project = $this->projectFacade->findBy(['slug' => $id]);

    // If there's no match for slug, search by id
    if (!$project) $project = $this->projectFacade->findBy(['id' => $id]);

    // No match for slug/id
    if (!$project) throw new EntityNotFoundException("No project found");

    return $this->ok([
      "project" => $project
    ]);
  }

}
