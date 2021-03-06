<?php

declare(strict_types=1);

namespace App\Domain\Api\Facade;

use App\Domain\Api\Request\Project\CreateProjectReqDto;
use App\Domain\Api\Response\ProjectResDto;
use App\Model\Database\Entity\Project;
use App\Model\Database\EntityManager;
use App\Model\Exception\Runtime\EntityNotFoundException;

final class ProjectFacade
{

  public function __construct(public EntityManager $em)
  {
  }

  /**
   * @param int $limit
   * @param int $offset
   * @return ProjectResDto[]
   */
  public function findAll(int $limit = 10, int $offset = 0): array
  {
    return $this->findBy([], limit: $limit, offset: $offset);
  }

  /**
   * @param array $criteria
   * @param int $limit
   * @param int $offset
   * @return ProjectResDto[]
   */
  public function findBy(
    array $criteria = [],
    int $limit = 10,
    int $offset = 0
  ): array {
    $projects = $this->em->getProjectRepository()->findBy($criteria, limit: $limit, offset: $offset);
    return ProjectResDto::fromMany($projects);
  }

  /**
   * @param int $id
   * @return ProjectResDto
   * @throws EntityNotFoundException
   */
  public function findOne(int $id): ProjectResDto
  {
    return $this->findOneBy(['id' => $id]);
  }

  /**
   * @param array $criteria
   * @param string[] $orderBy
   * @return ProjectResDto
   * @throws EntityNotFoundException
   */
  public function findOneBy(array $criteria, ?array $orderBy = null): ProjectResDto
  {
    $project = $this->em->getProjectRepository()->findOneBy($criteria, $orderBy);
    if (!$project) throw new EntityNotFoundException(404);

    return ProjectResDto::from($project);
  }

  /**
   * @param string $identifier
   * @return ProjectResDto
   * @throws EntityNotFoundException
   */
  public function findOneByIdentifier(string $identifier): ProjectResDto
  {
    try {
      // Querying by slug first as that is used in the frontend.
      $project = $this->findOneBy(['slug' => $identifier]);
    } catch (EntityNotFoundException) {
      $project = $this->findOneBy(['id' => $identifier]);
    }

    return $project;
  }

  /**
   * @param CreateProjectReqDto $dto
   * @return Project
   */
  public function create(CreateProjectReqDto $dto): Project
  {
    $project = new Project(
      $dto->name,
      $dto->type,
      $dto->description,
      $dto->address,
      $dto->slug,
      $dto->images,
      $dto->website
    );

    $this->em->persist($project);
    $this->em->flush($project);

    return $project;
  }
}
