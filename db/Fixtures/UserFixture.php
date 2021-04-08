<?php declare(strict_types=1);

namespace Database\Fixtures;

use App\Model\Database\Entity\User;
use App\Model\Fixtures\ReflectionLoader;
use App\Model\Security\Passwords;
use Doctrine\Persistence\ObjectManager;
use Nelmio\Alice\Throwable\LoadingThrowable;

/**
 * Class UserFixture
 * @package Database\Fixtures
 */
class UserFixture extends AbstractFixture
{
  /** @var ObjectManager */
  private ObjectManager $manager;

  /**
   * @return int
   */
  public function getOrder(): int
  {
    return 1;
  }

  public function load(ObjectManager $manager): void
  {
    $this->manager = $manager;

    foreach ($this->getStaticUsers() as $user) {
      $this->saveUser($user);
    }

    foreach ($this->getRandomUsers() as $user) {
      $this->manager->persist($user);
      $this->manager->flush();
    }
  }

  /**
   * @return array
   */
  protected function getStaticUsers(): iterable
  {
    yield [
      "email" => "example@example.com",
      "username" => "t3stus3r",
      "password" => "meow",
      "role" => User::ROLES[1],
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
        "user{1..100}" => [
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

  /**
   * @param array $user
   */
  protected function saveUser(array $user): void
  {
    $entity = new User(
      $user["username"],
      $user['email'],
      "admin"
    );

    $this->manager->persist($entity);
    $this->manager->flush();
  }
}
