<?php declare(strict_types = 1);

namespace App\Model\Database\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * @template TEntityClass
 * @extends EntityRepository<TEntityClass>
 */
abstract class AbstractRepository extends EntityRepository
{
}
