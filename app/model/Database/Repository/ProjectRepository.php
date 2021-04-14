<?php declare(strict_types = 1);

namespace App\Model\Database\Repository;

use App\Model\Database\Entity\Project;

/**
 * @method Project|NULL find($id, ?int $lockMode = NULL, ?int $lockVersion = NULL)
 * @method Project|NULL findOneBy(array $criteria, array $orderBy = NULL)
 * @method Project[] findAll()
 * @method Project[] findBy(array $criteria, array $orderBy = NULL, ?int $limit = NULL, ?int $offset = NULL)
 */
class ProjectRepository extends AbstractRepository
{

}
