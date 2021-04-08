<?php declare(strict_types=1);

namespace Database\Fixtures;

use App\Model\Database\Entity\Project;
use App\Model\Fixtures\ReflectionLoader;
use Doctrine\Persistence\ObjectManager;
use Nelmio\Alice\Throwable\LoadingThrowable;

/**
 * Class ProjectFixture
 * @package Database\Fixtures
 */
class ProjectFixture extends AbstractFixture
{
  /**
   * @return int
   */
  public function getOrder(): int
  {
    return 2;
  }

  /**
   * @param ObjectManager $manager
   * @throws LoadingThrowable
   */
  public function load(ObjectManager $manager): void
  {
    foreach ($this->getRandomProjects() as $project)
      $manager->persist($project);

   $manager->flush();
  }

  /**
   * @return Project[]
   * @throws LoadingThrowable
   */
  protected function getRandomProjects(): iterable
  {
    $loader = new ReflectionLoader();
    $objectSet = $loader->loadData([
      Project::class => [
        "project{1..5}" => [
          "__construct" => [
            "<company()>",
            "<slug(company())>",
          ],
          "id" => "<current()>",
        ],
      ],
    ]);

    return $objectSet->getObjects();
  }
}
