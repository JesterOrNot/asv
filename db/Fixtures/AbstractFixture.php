<?php declare(strict_types = 1);

namespace Database\Fixtures;

use Doctrine\Common\DataFixtures\AbstractFixture as BaseFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Faker\Factory;
use Faker\Generator;
use Nette\DI\Container;
use Nettrine\Fixtures\ContainerAwareInterface;

/**
 * Class AbstractFixture
 * @package Database\Fixtures
 */
abstract class AbstractFixture extends BaseFixture implements ContainerAwareInterface, OrderedFixtureInterface
{

	protected Container $container;

	/** @var Generator */
	protected Generator $faker;

  /**
   * AbstractFixture constructor
   */
	public function __construct()
	{
		$this->faker = Factory::create();
	}

  /**
   * @param Container $container
   */
	public function setContainer(Container $container): void
	{
		$this->container = $container;
	}

  /**
   * @return int
   */
	public function getOrder(): int
	{
		return 0;
	}

}
