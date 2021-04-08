<?php declare(strict_types = 1);

namespace App\Domain\Api\Facade;

use App\Domain\Api\Request\Team\CreateTeamReqDto;
use App\Domain\Api\Response\TeamResDto;
use App\Model\Database\Entity\Team;
use App\Model\Database\EntityManager;
use Doctrine\ORM\EntityNotFoundException;

final class TeamFacade
{

  public function __construct(private EntityManager $em)
  {
  }

  /**
   * @param int $limit
   * @param int $offset
   * @return TeamResDto[]
   */
  public function findAll(int $limit = 10, int $offset = 0): array
  {
    return $this->findBy([], limit: $limit, offset: $offset);
  }

  /**
   * @param array $criteria
   * @param string[] $orderBy
   * @param int $limit
   * @param int $offset
   * @return TeamResDto[]
   */
  public function findBy(
    array $criteria = [],
    array $orderBy = [ 'createdAt' => 'ASC' ],
    int $limit = 10,
    int $offset = 0
  ): array
  {
    $teams = $this->em->getTeamRepository()->findBy($criteria, $orderBy, $limit, $offset);

    return TeamResDto::fromMany($teams);
  }

  /**
   * @param int $id
   * @return TeamResDto
   * @throws EntityNotFoundException
   */
  public function findOne(int $id): TeamResDto
  {
    return $this->findOneBy([ 'id' => $id ]);
  }

  /**
   * @param array $criteria
   * @param string[] $orderBy
   * @return TeamResDto
   * @throws EntityNotFoundException
   */
  public function findOneBy(array $criteria, ?array $orderBy = null): TeamResDto
  {
    $team = $this->em->getTeamRepository()->findOneBy($criteria, $orderBy);
    if (!$team) throw new EntityNotFoundException();

    return TeamResDto::from($team);
  }

  /**
   * @param CreateTeamReqDto $dto
   * @return Team
   */
  public function create(CreateTeamReqDto $dto): Team
  {
    $team = new Team($dto->fullName, $dto->position, $dto->image);

    $this->em->persist($team);
    $this->em->flush($team);

    return $team;
  }

}
