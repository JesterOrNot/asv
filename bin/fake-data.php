<?php declare(strict_types = 1);

/**
 *
 * This file is just a "scratch file" for creating fake
 * data in development environment, not meant and not used
 * in production. Fixtures are not working at the moment for some reason,
 * probably related to PHP 8, so at the moment this is a shitty alternative.
 *
 * This code isn't gonna use some fancy shit, it's just gonna be a crappy shit,
 * and while you're gonna read through it, you will find SQL Injection here. And I am aware,
 * and again, this is for dev purposes only, not to be some secure prod shit.
 *
 * So, therefore, I don't give too much effort in writing this code. Please proceed with
 * caution, you may catch cancer.
 *
 * - Mia, 2021
 *
 */

require __DIR__ . '/../vendor/autoload.php';

use App\Model\Database\Entity\Project;
use Doctrine\DBAL\Connection;
use Doctrine\DBAL\DriverManager;
use Doctrine\DBAL\Types\Type;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\ORM\Tools\Setup;
use Faker\Factory as Faker;
use Faker\Generator;
use Nette\Neon\Neon;
use Nette\Utils\FileSystem;
use Ramsey\Uuid\Doctrine\UuidType;

/**
 * Class FakeManager
 *
 * The class managing the Database connection,
 * Faker and other things required for generating and inserting
 * fake data.
 *
 * Not actually generating it, all generating logic is inside of the
 * FakeData class.
 */
class FakeManager
{
  private Connection $conn;
  private EntityManagerInterface $em;

  private Generator $faker;

  public function __construct()
  {
    /**
     * Read the configuration file containing the database credentials.
     */
    $config = Neon::decode(FileSystem::read(__DIR__ . '/../app/config/config.local.neon'));
    $db = array_merge($config['parameters']['database'], [
      'driver' => 'pdo_mysql'
    ]);

    /**
     * Create a new connection to the dev db
     */
    $this->conn = DriverManager::getConnection($db);

    /**
     * UUID Support
     */
    Type::addType('uuid', UuidType::class);

    /**
     * Create EntityManager
     */
    $this->em = EntityManager::create($this->conn, Setup::createAnnotationMetadataConfiguration(
      [__DIR__ . '/../app/model/Database/Entity'], true, null, null, false
    ));

    /**
     * Faker
     */
    $this->faker = Faker::create('cs_CZ');
  }

  public static function create(): FakeManager
  {
    return new FakeManager();
  }

  /**
   * @return Generator
   */
  public function getFaker(): Generator
  {
    return $this->faker;
  }

  /**
   * @return Connection
   */
  public function getConnection(): Connection
  {
    return $this->conn;
  }

  /**
   * @return EntityManager
   */
  public function getEntityManager(): EntityManager
  {
    return $this->em;
  }
}

/**
 * Class FakeData
 *
 * This class actually contains functions
 * for generating fake data
 */
class FakeData
{

  /**
   * Generate 100 fake projects
   *
   * @param FakeManager $m
   * @throws ORMException
   * @throws OptimisticLockException
   */
  public static function fakeProjects(FakeManager $m)
  {
    $f = $m->getFaker();

    for ($i = 0; $i < 100; $i++) {
      $m->getEntityManager()->persist(
        new Project($m->getFaker()->company, $f->slug, [
          // Adding random numbers at the end because of browser caching
          'https://unsplash.it/1920/1080?random?' . $f->randomNumber(),
          'https://unsplash.it/1920/1080?random?' . $f->randomNumber(),
          'https://unsplash.it/1920/1080?random?' . $f->randomNumber()
        ])
      );
    }

    $m->getEntityManager()->flush();
  }

  /**
   * Generates fake data for all entities
   *
   * @param FakeManager $m
   * @throws ORMException
   * @throws OptimisticLockException
   */
  public static function fakeAll(FakeManager $m)
  {
    self::fakeProjects($m);
  }

}

// Generate data
FakeData::fakeProjects(FakeManager::create());
