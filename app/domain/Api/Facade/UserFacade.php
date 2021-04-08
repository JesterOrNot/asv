<?php declare(strict_types = 1);

namespace App\Domain\Api\Facade;

use App\Domain\Api\Request\User\CreateUserReqDto;
use App\Domain\Api\Response\UserResDto;
use App\Model\Database\Entity\User;
use App\Model\Database\EntityManager;
use Doctrine\ORM\EntityNotFoundException;

final class UserFacade
{

  public function __construct(private EntityManager $em)
  {
  }

  /**
   * @param int $limit
   * @param int $offset
   * @return UserResDto[]
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
   * @return UserResDto[]
   */
  public function findBy(
    array $criteria = [],
    array $orderBy = [ 'createdAt' => 'ASC' ],
    int $limit = 10,
    int $offset = 0
  ): array
  {
    $users = $this->em->getUserRepository()->findBy($criteria, $orderBy, $limit, $offset);

    return UserResDto::fromMany($users);
  }

  /**
   * @param int $id
   * @return UserResDto
   * @throws EntityNotFoundException
   */
  public function findOne(int $id): UserResDto
  {
    return $this->findOneBy([ 'id' => $id ]);
  }

  /**
   * @param array $criteria
   * @param string[] $orderBy
   * @return UserResDto
   * @throws EntityNotFoundException
   */
  public function findOneBy(array $criteria, ?array $orderBy = null): UserResDto
  {
    $user = $this->em->getUserRepository()->findOneBy($criteria, $orderBy);
    if (!$user) throw new EntityNotFoundException();

    return UserResDto::from($user);
  }

  /**
   * @param CreateUserReqDto $dto
   * @return User
   */
  public function create(CreateUserReqDto $dto): User
  {
    $user = new User($dto->username, $dto->email, $dto->password);

    $this->em->persist($user);
    $this->em->flush($user);

    return $user;
  }

}
