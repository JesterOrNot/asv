<?php declare(strict_types = 1);

namespace App\Model\Database;

use App\Model\Database\Entity\AccessRecord;
use App\Model\Database\Entity\Project;
use App\Model\Database\Entity\Team;
use App\Model\Database\Entity\User;
use App\Model\Database\Repository\AccessRecordRepository;
use App\Model\Database\Repository\ProjectRepository;
use App\Model\Database\Repository\TeamRepository;
use App\Model\Database\Repository\UserRepository;

/**
 * @mixin EntityManager
 */
trait TRepositories
{
  /**
   * @return UserRepository
   */
  public function getUserRepository(): UserRepository
  {
    return $this->getRepository(User::class);
  }

  /**
   * @return ProjectRepository
   */
  public function getProjectRepository(): ProjectRepository
  {
    return $this->getRepository(Project::class);
  }

  /**
   * @return TeamRepository
   */
  public function getTeamRepository(): TeamRepository
  {
    return $this->getRepository(Team::class);
  }

  /**
   * @return AccessRecordRepository
   */
  public function getAccessRecordRepository(): AccessRecordRepository
  {
    return $this->getRepository(AccessRecord::class);
  }
}
