<?php declare(strict_types = 1);

namespace App\Module\V2;

use Apitte\Core\Annotation\Controller\Method;
use Apitte\Core\Annotation\Controller\OpenApi;
use Apitte\Core\Annotation\Controller\Path;
use Apitte\Core\Annotation\Controller\RequestParameter;
use Apitte\Core\Annotation\Controller\RequestParameters;
use Apitte\Core\Http\ApiRequest;
use App\Domain\Api\Facade\ProjectFacade;
use App\Domain\Api\Response\ProjectResDto;
use App\Model\Database\Entity\Project;
use App\Model\Exception\Runtime\EntityNotFoundException;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Doctrine\ORM\QueryBuilder;

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
   *        @RequestParameter(name="limit", type="int", in="query", required=false, description="Data limit"),
   *        @RequestParameter(name="page", type="int", in="query", required=false, description="Data offset"),
   *        @RequestParameter(name="type", type="int", in="query", required=false, description="Data offset")
   * })
   * @param ApiRequest $req
   * @return ProjectResDto[]
   */
  public function allProjects(ApiRequest $req): array
  {
    $limit = intval($req->getParameter('limit', 10));
    $page = intval($req->getParameter('page', 1));
    $offset = ($page - 1) * $limit;

    $type = $req->getParameter('type');

    $fetchByType = function () use ($offset, $limit, $type) {
      $qb = $this->createFetchByTypeQuery($type);

      return $qb->setMaxResults($limit)
        ->setFirstResult($offset)
        ->getQuery()
        ->getArrayResult();
    };

    $fetchAll = function () use ($offset, $limit) {
      return $this->projectFacade->findAll($limit, $offset);
    };

    return $this->ok([
      'projects' => $type ? $fetchByType() : $fetchAll(),
    ]);
  }

  public function createFetchByTypeQuery(string $type, string $select = 'p'): QueryBuilder
  {
    $qb = $this->projectFacade->em->createQueryBuilder();

    return $qb->select($select)
      ->from(Project::class, 'p')
      ->where($qb->expr()->like('p.types', '?1'))
      ->setParameter(1, sprintf('%%%s%%', $type));
  }

  /**
   * @OpenApi("
   *   summary: Get project by id/slug.
   * ")
   * @Path("/")
   * @Method("GET")
   * @RequestParameters({
   *        @RequestParameter(name="id", type="int", in="query", required=false, description="ID/Slug")
   * })
   * @param ApiRequest $req
   * @return ProjectResDto[]
   * @throws EntityNotFoundException
   */
  public function getProject(ApiRequest $req): array
  {
    $id = $req->getParameter('id');

    // Find by slug/id
    $project = $this->projectFacade->findOneByIdentifier($id);

    // No match for slug/id
    if (!$project)
      throw new EntityNotFoundException(404);

    return $this->ok([
      'project' => $project,
    ]);
  }

  /**
   * @OpenApi("
   *   summary: Get amount of projects per every type.
   * ")
   * @Path("/typeStates")
   * @Method("GET")
   * @return ProjectResDto[]
   * @throws NoResultException
   * @throws NonUniqueResultException
   */
  public function typeStates(): array
  {
    $result = [];

    foreach (Project::TYPES as $type) {
      $result[$type] = intval($this->createFetchByTypeQuery($type, 'count(p)')->getQuery()->getSingleScalarResult());
    }

    return $this->ok([
      'states' => $result,
    ]);
  }

}
