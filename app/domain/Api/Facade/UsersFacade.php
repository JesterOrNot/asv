<?php declare(strict_types = 1);

namespace App\Domain\Api\Facade;

use App\Domain\Api\Request\CreateUserReqDto;
use App\Domain\Api\Response\UserResDto;
use App\Model\Database\Entity\User;
use App\Model\Database\EntityManager;
use Doctrine\ORM\EntityNotFoundException;

final class UsersFacade
{

	public function __construct(private EntityManager $em)
	{}

  /**
   * @param array $criteria
   * @param string[] $orderBy
   * @param int $limit
   * @param int $offset
   * @return UserResDto[]
   */
	public function findBy(
	  array $criteria = [],
    array $orderBy = ['id' => 'ASC'],
    int $limit = 10,
    int $offset = 0
  ): array
  {
		$entities = $this->em->getUserRepository()->findBy($criteria, $orderBy, $limit, $offset);
		$result = [];

		foreach ($entities as $entity) {
			$result[] = UserResDto::from($entity);
		}

		return $result;
	}

  /**
   * @param int $limit
   * @param int $offset
   * @return UserResDto[]
   */
	public function findAll(int $limit = 10, int $offset = 0): array
	{
		return $this->findBy([], ['id' => 'ASC'], $limit, $offset);
	}

  /**
   * @param array $criteria
   * @param string[] $orderBy
   * @return UserResDto
   * @throws EntityNotFoundException
   */
	public function findOneBy(array $criteria, ?array $orderBy = null): UserResDto
	{
		$entity = $this->em->getUserRepository()->findOneBy($criteria, $orderBy);
		if (!$entity) throw new EntityNotFoundException();

		return UserResDto::from($entity);
	}

  /**
   * @param int $id
   * @return UserResDto
   * @throws EntityNotFoundException
   */
  public function findOne(int $id): UserResDto
	{
		return $this->findOneBy(['id' => $id]);
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
