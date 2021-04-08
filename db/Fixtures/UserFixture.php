<?php declare(strict_types=1);

namespace Database\Fixtures;

use App\Model\Database\Entity\User;
use App\Model\Fixtures\ReflectionLoader;
use App\Model\Security\Passwords;
use Doctrine\Persistence\ObjectManager;

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
   * @return mixed[]
   */
  protected function getStaticUsers(): iterable
  {
    yield [
      "email" => "example@example.com",
      "name" => "Test",
      "surname" => "User",
      "username" => "t3stus3r",
      "role" => User::ROLE_ADMIN,
    ];
  }

  /**
   * @return User[]
   */
  protected function getRandomUsers(): iterable
  {
    $loader = new ReflectionLoader();
    $objectSet = $loader->loadData([
      User::class => [
        "user{1..100}" => [
          "__construct" => [
            "<firstName()>",
            "<lastName()>",
            "<email()>",
            "<username()>",
            "<password()>",
          ],
          "id" => "<current()>",
          "apiKey" => "<sha256()>",
        ],
      ],
    ]);

    return $objectSet->getObjects();
  }

  /**
   * @param mixed[] $user
   */
  protected function saveUser(array $user): void
  {
    $entity = new User(
      $user["name"],
      $user["surname"],
      $user["email"],
      $user["username"],
      Passwords::create()->hash("admin")
    );
    $entity->activate();
    $entity->setRole($user["role"]);
    $entity->setApikey($user["apikey"]);

    $this->manager->persist($entity);
    $this->manager->flush();
  }
}
