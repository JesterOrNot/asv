<?php declare(strict_types = 1);

namespace Database\Fixtures;

use App\Model\Database\Entity\Team;
use Doctrine\Persistence\ObjectManager;
use JetBrains\PhpStorm\Pure;

/**
 * Class TeamFixture
 * @package Database\Fixtures
 */
class TeamFixture extends AbstractFixture
{

  /**
   * @return int
   */
  public function getOrder(): int
  {
    return 1;
  }

  public function load(ObjectManager $manager): void
  {
    foreach ($this->getStaticTeams() as $team)
      $manager->persist($team);

    $manager->flush();
  }

  /**
   * @return array
   */
  #[Pure] protected function getStaticTeams(): array
  {
    return [
      new Team("Aleš Vobruba", "CEO"),
      new Team("Pavel Menšík", "Finanční ředitel")
    ];
  }
}
