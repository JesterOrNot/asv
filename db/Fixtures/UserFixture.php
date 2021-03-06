<?php declare(strict_types=1);

namespace Database\Fixtures;

use App\Model\Database\Entity\User;
use App\Model\Fixtures\ReflectionLoader;
use Doctrine\Persistence\ObjectManager;
use Nelmio\Alice\Throwable\LoadingThrowable;

/**
 * Class UserFixture
 * @package Database\Fixtures
 */
class UserFixture extends AbstractFixture
{

  /**
   * @return int
   */
  public function getOrder(): int
  {
    return 1;
  }

  /**
   * @param ObjectManager $manager
   * @throws LoadingThrowable
   */
  public function load(ObjectManager $manager): void
  {
    foreach (array_merge($this->getRandomUsers(), $this->getStaticUsers()) as $user) {
      $manager->persist($user);
    }
    $manager->flush();
  }

  /**
   * @return User[]
   */
  protected function getStaticUsers(): iterable
  {
    return [
      new User("test", "example@example.com", "hello123", User::ROLES[1])
    ];
  }

  /**
   * @return User[]
   * @throws LoadingThrowable
   */
  protected function getRandomUsers(): iterable
  {
    $loader = new ReflectionLoader();
    $objectSet = $loader->loadData([
      User::class => [
        "user{1..5}" => [
          "__construct" => [
            "<username()>",
            "<email()>",
            "<password()>",
          ],
          "id" => "<current()>",
        ],
      ],
    ]);

    return $objectSet->getObjects();
  }

}
