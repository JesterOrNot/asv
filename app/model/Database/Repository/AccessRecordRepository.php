<?php declare(strict_types = 1);

namespace App\Model\Database\Repository;

use App\Model\Database\Entity\AccessRecord;

/**
 * @method AccessRecord|NULL find($id, ?int $lockMode = NULL, ?int $lockVersion = NULL)
 * @method AccessRecord|NULL findOneBy(array $criteria, array $orderBy = NULL)
 * @method AccessRecord[] findAll()
 * @method AccessRecord[] findBy(array $criteria, array $orderBy = NULL, ?int $limit = NULL, ?int $offset = NULL)
 */
class AccessRecordRepository extends AbstractRepository
{

}
