<?php declare(strict_types = 1);

namespace App\Model\Database\Repository;

use App\Model\Database\Entity\Team;

/**
 * @method Team|NULL find($id, ?int $lockMode = NULL, ?int $lockVersion = NULL)
 * @method Team|NULL findOneBy(array $criteria, array $orderBy = NULL)
 * @method Team[] findAll()
 * @method Team[] findBy(array $criteria, array $orderBy = NULL, ?int $limit = NULL, ?int $offset = NULL)
 */
class TeamRepository extends AbstractRepository
{

}
