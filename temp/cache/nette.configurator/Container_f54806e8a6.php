<?php
// source: /home/vottusuwu/Desktop/asv/backend-php/app/config/env/prod.neon
// source: /home/vottusuwu/Desktop/asv/backend-php/app/config/config.local.neon
// source: /home/vottusuwu/Desktop/asv/backend-php/public/../app/config/app/nette.neon
// source: array
// source: array

/** @noinspection PhpParamsInspection,PhpMethodMayBeStaticInspection */

declare(strict_types=1);

class Container_f54806e8a6 extends Nette\DI\Container
{
	protected $tags = [
		'middleware' => [
			'api.middlewares.api' => ['priority' => 500],
			'api.middlewares.autobasepath' => ['priority' => 200],
			'middleware.authenticator' => ['priority' => 200],
			'middleware.methodOverride' => ['priority' => 150],
			'middleware.tryCatch' => ['priority' => 1],
			'middlewares.logging' => ['priority' => 100],
		],
		'nette.inject' => [
			'application.1' => true,
			'application.2' => true,
			'application.3' => true,
			'nettrine.fixtures.loadDataFixturesCommand' => true,
		],
		'console.command' => [
			'nettrine.fixtures.loadDataFixturesCommand' => 'doctrine:fixtures:load',
			'nettrine.migrations.diffCommand' => 'migrations:diff',
			'nettrine.migrations.executeCommand' => 'migrations:execute',
			'nettrine.migrations.generateCommand' => 'migrations:generate',
			'nettrine.migrations.latestCommand' => 'migrations:latest',
			'nettrine.migrations.migrateCommand' => 'migrations:migrate',
			'nettrine.migrations.statusCommand' => 'migrations:status',
			'nettrine.migrations.upToDateCommand' => 'migrations:up-to-date',
			'nettrine.migrations.versionCommand' => 'migrations:version',
		],
		'nettrine.orm.annotation.driver' => ['nettrine.orm.annotations.annotationDriver' => true],
		'nettrine.orm.mapping.driver' => ['nettrine.orm.mappingDriver' => true],
	];

	protected $types = ['container' => 'Nette\DI\Container'];

	protected $aliases = [
		'application' => 'application.application',
		'httpRequest' => 'http.request',
		'httpResponse' => 'http.response',
		'nette.httpRequestFactory' => 'http.requestFactory',
		'nette.presenterFactory' => 'application.presenterFactory',
		'session' => 'session.session',
	];

	protected $wiring = [
		'Nette\DI\Container' => [['container']],
		'Nette\Application\Application' => [['application.application']],
		'Nette\Application\IPresenterFactory' => [['application.presenterFactory']],
		'Nette\Application\LinkGenerator' => [['application.linkGenerator']],
		'Nette\Http\RequestFactory' => [['http.requestFactory']],
		'Nette\Http\IRequest' => [['http.request']],
		'Nette\Http\Request' => [['http.request']],
		'Nette\Http\IResponse' => [['http.response']],
		'Nette\Http\Response' => [['http.response']],
		'Nette\Http\Session' => [['session.session']],
		'Tracy\ILogger' => [0 => ['monolog.psrToTracyLazyAdapter'], 2 => ['tracy.logger', 'monolog.psrToTracyAdapter']],
		'Tracy\BlueScreen' => [['tracy.blueScreen']],
		'Tracy\Bar' => [['tracy.bar']],
		'Contributte\Middlewares\Utils\ChainBuilder' => [2 => ['middlewares.chain']],
		'Contributte\Middlewares\Application\AbstractApplication' => [['middlewares.application']],
		'Contributte\Middlewares\Application\IApplication' => [['middlewares.application']],
		'Contributte\Middlewares\Application\MiddlewareApplication' => [['middlewares.application']],
		'App\Module\V2\BaseV1Controller' => [
			['resource._App_Module_.1', 'resource._App_Module_.2', 'resource._App_Module_.3'],
		],
		'App\Module\BaseController' => [['resource._App_Module_.1', 'resource._App_Module_.2', 'resource._App_Module_.3']],
		'Apitte\Core\UI\Controller\IController' => [
			['resource._App_Module_.1', 'resource._App_Module_.2', 'resource._App_Module_.3'],
		],
		'App\Module\V2\UserCreateController' => [['resource._App_Module_.1']],
		'App\Module\V2\UsersOneController' => [['resource._App_Module_.2']],
		'App\Module\V2\UsersController' => [['resource._App_Module_.3']],
		'Apitte\Core\Dispatcher\JsonDispatcher' => [['api.core.dispatcher']],
		'Apitte\Core\Dispatcher\CoreDispatcher' => [['api.core.dispatcher']],
		'Apitte\Core\Dispatcher\IDispatcher' => [['api.core.dispatcher']],
		'App\Model\Api\Dispatcher\JsonDispatcher' => [['api.core.dispatcher']],
		'Apitte\Core\ErrorHandler\IErrorHandler' => [['api.core.errorHandler']],
		'Apitte\Core\Application\IApplication' => [['api.core.application']],
		'Apitte\Core\Router\IRouter' => [['api.core.router']],
		'Apitte\Core\Handler\IHandler' => [['api.core.handler']],
		'Apitte\Core\Schema\Schema' => [['api.core.schema']],
		'Contributte\Middlewares\IMiddleware' => [
			[
				'api.middlewares.autobasepath',
				'api.middlewares.api',
				'middleware.tryCatch',
				'middlewares.logging',
				'middleware.methodOverride',
				'middleware.authenticator',
			],
		],
		'Contributte\Middlewares\AutoBasePathMiddleware' => [['api.middlewares.autobasepath']],
		'Apitte\Middlewares\ApiMiddleware' => [['api.middlewares.api']],
		'Apitte\OpenApi\SchemaDefinition\Entity\IEntityAdapter' => [['api.openapi.entityAdapter']],
		'Apitte\OpenApi\SchemaDefinition\Entity\EntityAdapter' => [['api.openapi.entityAdapter']],
		'Apitte\OpenApi\SchemaDefinition\IDefinition' => [['api.openapi.coreDefinition']],
		'Apitte\OpenApi\SchemaDefinition\CoreDefinition' => [['api.openapi.coreDefinition']],
		'Apitte\OpenApi\ISchemaBuilder' => [['api.openapi.schemaBuilder']],
		'Apitte\OpenApi\SchemaBuilder' => [['api.openapi.schemaBuilder']],
		'Monolog\Handler\StreamHandler' => [2 => ['monolog.logger.default.handler.0']],
		'Monolog\Handler\AbstractProcessingHandler' => [2 => ['monolog.logger.default.handler.0']],
		'Monolog\Handler\AbstractHandler' => [
			2 => ['monolog.logger.default.handler.0', 'monolog.logger.default.handler.tracy'],
		],
		'Monolog\Handler\Handler' => [2 => ['monolog.logger.default.handler.0', 'monolog.logger.default.handler.tracy']],
		'Monolog\Handler\HandlerInterface' => [
			2 => ['monolog.logger.default.handler.0', 'monolog.logger.default.handler.tracy'],
		],
		'Monolog\ResettableInterface' => [
			0 => ['monolog.logger.default'],
			2 => ['monolog.logger.default.handler.0', 'monolog.logger.default.handler.tracy'],
		],
		'Monolog\Handler\ProcessableHandlerInterface' => [2 => ['monolog.logger.default.handler.0']],
		'Monolog\Handler\FormattableHandlerInterface' => [
			2 => ['monolog.logger.default.handler.0', 'monolog.logger.default.handler.tracy'],
		],
		'Monolog\Handler\RotatingFileHandler' => [2 => ['monolog.logger.default.handler.0']],
		'Monolog\Handler\PsrHandler' => [2 => ['monolog.logger.default.handler.tracy']],
		'Monolog\Processor\ProcessorInterface' => [
			2 => [
				'monolog.logger.default.processor.0',
				'monolog.logger.default.processor.1',
				'monolog.logger.default.processor.2',
				'monolog.logger.default.processor.3',
			],
		],
		'Monolog\Processor\WebProcessor' => [2 => ['monolog.logger.default.processor.0']],
		'Monolog\Processor\IntrospectionProcessor' => [2 => ['monolog.logger.default.processor.1']],
		'Monolog\Processor\MemoryProcessor' => [2 => ['monolog.logger.default.processor.2']],
		'Monolog\Processor\MemoryPeakUsageProcessor' => [2 => ['monolog.logger.default.processor.2']],
		'Monolog\Processor\ProcessIdProcessor' => [2 => ['monolog.logger.default.processor.3']],
		'Psr\Log\LoggerInterface' => [['monolog.logger.default']],
		'Monolog\Logger' => [['monolog.logger.default']],
		'Tracy\Bridges\Psr\PsrToTracyLoggerAdapter' => [2 => ['monolog.psrToTracyAdapter']],
		'Contributte\Monolog\Tracy\LazyTracyLogger' => [['monolog.psrToTracyLazyAdapter']],
		'Doctrine\Common\Annotations\Reader' => [
			0 => ['nettrine.annotations.reader'],
			2 => [0 => 'nettrine.annotations.delegatedReader', 2 => 'symfony.serializer.annotationReader'],
		],
		'Doctrine\Common\Annotations\AnnotationReader' => [
			2 => ['nettrine.annotations.delegatedReader', 'symfony.serializer.annotationReader'],
		],
		'Doctrine\DBAL\Logging\SQLLogger' => [1 => ['nettrine.dbal.logger'], [1 => 'nettrine.dbal.logger.config']],
		'Doctrine\DBAL\Logging\LoggerChain' => [['nettrine.dbal.logger']],
		'Doctrine\DBAL\Configuration' => [0 => ['nettrine.orm.configuration'], 2 => ['nettrine.dbal.configuration']],
		'Nettrine\DBAL\Logger\PsrLogger' => [2 => ['nettrine.dbal.logger.config']],
		'Doctrine\Common\EventManager' => [0 => ['nettrine.dbal.eventManager.debug'], 2 => ['nettrine.dbal.eventManager']],
		'Nettrine\DBAL\Events\ContainerAwareEventManager' => [2 => ['nettrine.dbal.eventManager']],
		'Nettrine\DBAL\Events\DebugEventManager' => [['nettrine.dbal.eventManager.debug']],
		'Nettrine\DBAL\ConnectionFactory' => [['nettrine.dbal.connectionFactory']],
		'Doctrine\DBAL\Driver\Connection' => [['nettrine.dbal.connection']],
		'Doctrine\DBAL\Connection' => [['nettrine.dbal.connection']],
		'Doctrine\ORM\Configuration' => [['nettrine.orm.configuration']],
		'Doctrine\ORM\Mapping\EntityListenerResolver' => [['nettrine.orm.entityListenerResolver']],
		'Nettrine\ORM\Mapping\ContainerEntityListenerResolver' => [['nettrine.orm.entityListenerResolver']],
		'Nettrine\ORM\EntityManagerDecorator' => [['nettrine.orm.entityManagerDecorator']],
		'Doctrine\ORM\Decorator\EntityManagerDecorator' => [['nettrine.orm.entityManagerDecorator']],
		'Doctrine\Persistence\ObjectManagerDecorator' => [['nettrine.orm.entityManagerDecorator']],
		'Doctrine\Persistence\ObjectManager' => [['nettrine.orm.entityManagerDecorator']],
		'Doctrine\ORM\EntityManagerInterface' => [['nettrine.orm.entityManagerDecorator']],
		'App\Model\Database\EntityManager' => [['nettrine.orm.entityManagerDecorator']],
		'Doctrine\Persistence\AbstractManagerRegistry' => [['nettrine.orm.managerRegistry']],
		'Doctrine\Persistence\ConnectionRegistry' => [['nettrine.orm.managerRegistry']],
		'Doctrine\Persistence\ManagerRegistry' => [['nettrine.orm.managerRegistry']],
		'Nettrine\ORM\ManagerRegistry' => [['nettrine.orm.managerRegistry']],
		'Doctrine\Persistence\Mapping\Driver\MappingDriver' => [
			0 => ['nettrine.orm.mappingDriver'],
			2 => [1 => 'nettrine.orm.annotations.annotationDriver'],
		],
		'Doctrine\Persistence\Mapping\Driver\MappingDriverChain' => [['nettrine.orm.mappingDriver']],
		'Doctrine\ORM\Cache\RegionsConfiguration' => [2 => ['nettrine.orm.cache.regions']],
		'Doctrine\ORM\Cache\CacheFactory' => [2 => ['nettrine.orm.cache.cacheFactory']],
		'Doctrine\ORM\Cache\DefaultCacheFactory' => [2 => ['nettrine.orm.cache.cacheFactory']],
		'Doctrine\ORM\Cache\CacheConfiguration' => [2 => ['nettrine.orm.cache.cacheConfiguration']],
		'Doctrine\Persistence\Mapping\Driver\AnnotationDriver' => [2 => ['nettrine.orm.annotations.annotationDriver']],
		'Doctrine\ORM\Mapping\Driver\AnnotationDriver' => [2 => ['nettrine.orm.annotations.annotationDriver']],
		'Doctrine\Migrations\Configuration\Configuration' => [['nettrine.migrations.configuration']],
		'Nettrine\Migrations\ContainerAwareConfiguration' => [['nettrine.migrations.configuration']],
		'Doctrine\Migrations\Tools\Console\Command\AbstractCommand' => [
			2 => [
				'nettrine.migrations.diffCommand',
				'nettrine.migrations.executeCommand',
				'nettrine.migrations.generateCommand',
				'nettrine.migrations.latestCommand',
				'nettrine.migrations.migrateCommand',
				'nettrine.migrations.statusCommand',
				'nettrine.migrations.upToDateCommand',
				'nettrine.migrations.versionCommand',
			],
		],
		'Symfony\Component\Console\Command\Command' => [
			0 => ['nettrine.fixtures.loadDataFixturesCommand'],
			2 => [
				'nettrine.migrations.diffCommand',
				'nettrine.migrations.executeCommand',
				'nettrine.migrations.generateCommand',
				'nettrine.migrations.latestCommand',
				'nettrine.migrations.migrateCommand',
				'nettrine.migrations.statusCommand',
				'nettrine.migrations.upToDateCommand',
				'nettrine.migrations.versionCommand',
			],
		],
		'Doctrine\Migrations\Tools\Console\Command\DiffCommand' => [2 => ['nettrine.migrations.diffCommand']],
		'Doctrine\Migrations\Tools\Console\Command\ExecuteCommand' => [2 => ['nettrine.migrations.executeCommand']],
		'Nettrine\Migrations\Command\FixedExecuteCommand' => [2 => ['nettrine.migrations.executeCommand']],
		'Doctrine\Migrations\Tools\Console\Command\GenerateCommand' => [2 => ['nettrine.migrations.generateCommand']],
		'Doctrine\Migrations\Tools\Console\Command\LatestCommand' => [2 => ['nettrine.migrations.latestCommand']],
		'Doctrine\Migrations\Tools\Console\Command\MigrateCommand' => [2 => ['nettrine.migrations.migrateCommand']],
		'Doctrine\Migrations\Tools\Console\Command\StatusCommand' => [2 => ['nettrine.migrations.statusCommand']],
		'Doctrine\Migrations\Tools\Console\Command\UpToDateCommand' => [2 => ['nettrine.migrations.upToDateCommand']],
		'Doctrine\Migrations\Tools\Console\Command\VersionCommand' => [2 => ['nettrine.migrations.versionCommand']],
		'Symfony\Component\Console\Helper\Helper' => [2 => ['nettrine.migrations.configurationHelper']],
		'Symfony\Component\Console\Helper\HelperInterface' => [2 => ['nettrine.migrations.configurationHelper']],
		'Doctrine\Migrations\Tools\Console\Helper\ConfigurationHelperInterface' => [
			2 => ['nettrine.migrations.configurationHelper'],
		],
		'Doctrine\Migrations\Tools\Console\Helper\ConfigurationHelper' => [
			2 => ['nettrine.migrations.configurationHelper'],
		],
		'Doctrine\Common\DataFixtures\Loader' => [['nettrine.fixtures.fixturesLoader']],
		'Nettrine\Fixtures\Loader\FixturesLoader' => [['nettrine.fixtures.fixturesLoader']],
		'Nettrine\Fixtures\Command\LoadDataFixturesCommand' => [['nettrine.fixtures.loadDataFixturesCommand']],
		'Doctrine\Common\Cache\Cache' => [['nettrine.cache.driver']],
		'App\Domain\Api\Facade\UsersFacade' => [['01']],
		'Symfony\Component\Serializer\SerializerInterface' => [['symfony.serializer.serializer']],
		'Symfony\Component\Serializer\Normalizer\ContextAwareNormalizerInterface' => [['symfony.serializer.serializer']],
		'Symfony\Component\Serializer\Normalizer\ContextAwareDenormalizerInterface' => [['symfony.serializer.serializer']],
		'Symfony\Component\Serializer\Encoder\ContextAwareEncoderInterface' => [['symfony.serializer.serializer']],
		'Symfony\Component\Serializer\Encoder\ContextAwareDecoderInterface' => [['symfony.serializer.serializer']],
		'Symfony\Component\Serializer\Normalizer\NormalizerInterface' => [
			0 => ['symfony.serializer.serializer'],
			2 => [1 => 'symfony.serializer.objectNormalizer'],
		],
		'Symfony\Component\Serializer\Normalizer\DenormalizerInterface' => [
			0 => ['symfony.serializer.serializer'],
			2 => [1 => 'symfony.serializer.objectNormalizer'],
		],
		'Symfony\Component\Serializer\Encoder\EncoderInterface' => [['symfony.serializer.serializer']],
		'Symfony\Component\Serializer\Encoder\DecoderInterface' => [['symfony.serializer.serializer']],
		'Symfony\Component\Serializer\Serializer' => [['symfony.serializer.serializer']],
		'Symfony\Component\Serializer\Normalizer\AbstractObjectNormalizer' => [
			2 => ['symfony.serializer.objectNormalizer'],
		],
		'Symfony\Component\Serializer\Normalizer\AbstractNormalizer' => [2 => ['symfony.serializer.objectNormalizer']],
		'Symfony\Component\Serializer\SerializerAwareInterface' => [2 => ['symfony.serializer.objectNormalizer']],
		'Symfony\Component\Serializer\Normalizer\CacheableSupportsMethodInterface' => [
			2 => ['symfony.serializer.objectNormalizer'],
		],
		'Symfony\Component\Serializer\Normalizer\ObjectNormalizer' => [2 => ['symfony.serializer.objectNormalizer']],
		'Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactoryInterface' => [
			2 => ['symfony.serializer.classMetadataFactory'],
		],
		'Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory' => [
			2 => ['symfony.serializer.classMetadataFactory'],
		],
		'Symfony\Component\Serializer\Mapping\Loader\LoaderInterface' => [2 => ['symfony.serializer.annotationLoader']],
		'Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader' => [2 => ['symfony.serializer.annotationLoader']],
		'Symfony\Component\Validator\Mapping\Factory\MetadataFactoryInterface' => [['symfony.validator']],
		'Symfony\Component\Validator\Validator\ValidatorInterface' => [['symfony.validator']],
		'Symfony\Component\Validator\ValidatorBuilder' => [2 => ['symfony.validator.builder']],
		'Contributte\Middlewares\TryCatchMiddleware' => [['middleware.tryCatch']],
		'Contributte\Middlewares\LoggingMiddleware' => [['middlewares.logging']],
		'Contributte\Middlewares\MethodOverrideMiddleware' => [['middleware.methodOverride']],
		'App\Model\Api\Middleware\AuthenticationMiddleware' => [['middleware.authenticator']],
		'Nette\Routing\Router' => [['02']],
		'App\Model\FrontendRouter' => [['02']],
		'Nette\Application\UI\Presenter' => [2 => ['application.1']],
		'Nette\Application\UI\Control' => [2 => ['application.1']],
		'Nette\Application\UI\Component' => [2 => ['application.1']],
		'Nette\ComponentModel\Container' => [2 => ['application.1']],
		'Nette\ComponentModel\Component' => [2 => ['application.1']],
		'Nette\Application\IPresenter' => [2 => ['application.1', 'application.2', 'application.3']],
		'Nette\Application\UI\Renderable' => [2 => ['application.1']],
		'ArrayAccess' => [2 => ['application.1']],
		'Nette\Application\UI\StatePersistent' => [2 => ['application.1']],
		'Nette\Application\UI\SignalReceiver' => [2 => ['application.1']],
		'Nette\ComponentModel\IContainer' => [2 => ['application.1']],
		'Nette\ComponentModel\IComponent' => [2 => ['application.1']],
		'App\Presenters\FrontendPresenter' => [2 => ['application.1']],
		'NetteModule\ErrorPresenter' => [2 => ['application.2']],
		'NetteModule\MicroPresenter' => [2 => ['application.3']],
		'Apitte\Core\Schema\Serialization\IHydrator' => [['api.core.schema.hydrator']],
		'Apitte\Core\Schema\Serialization\ArrayHydrator' => [['api.core.schema.hydrator']],
	];


	public function __construct(array $params = [])
	{
		parent::__construct($params);
		$this->parameters += [
			'system' => ['error' => ['email' => 'dev@dev.dev', 'presenter' => 'Front:Error']],
			'database' => [
				'driver' => 'pdo_mysql',
				'port' => 5432,
				'host' => 'localhost',
				'dbname' => 'asv_dev',
				'user' => 'asv',
				'password' => 'lol123',
			],
			'appDir' => '/home/vottusuwu/Desktop/asv/backend-php/app',
			'wwwDir' => '/home/vottusuwu/Desktop/asv/backend-php/public',
			'debugMode' => true,
			'productionMode' => false,
			'consoleMode' => false,
			'tempDir' => '/home/vottusuwu/Desktop/asv/backend-php/app/../temp',
			'rootDir' => '/home/vottusuwu/Desktop/asv/backend-php',
		];
	}


	public function createService01(): App\Domain\Api\Facade\UsersFacade
	{
		return new App\Domain\Api\Facade\UsersFacade($this->getService('nettrine.orm.entityManagerDecorator'));
	}


	public function createService02(): App\Model\FrontendRouter
	{
		return new App\Model\FrontendRouter;
	}


	public function createServiceApi__core__application(): Apitte\Core\Application\IApplication
	{
		return new Apitte\Core\Application\Application(
			$this->getService('api.core.errorHandler'),
			$this->getService('api.core.dispatcher')
		);
	}


	public function createServiceApi__core__dispatcher(): App\Model\Api\Dispatcher\JsonDispatcher
	{
		return new App\Model\Api\Dispatcher\JsonDispatcher(
			$this->getService('api.core.router'),
			$this->getService('api.core.handler'),
			$this->getService('symfony.serializer.serializer'),
			$this->getService('symfony.validator')
		);
	}


	public function createServiceApi__core__errorHandler(): Apitte\Core\ErrorHandler\IErrorHandler
	{
		$service = new Apitte\Core\ErrorHandler\PsrLogErrorHandler($this->getService('monolog.logger.default'));
		$service->setCatchException(true);
		return $service;
	}


	public function createServiceApi__core__handler(): Apitte\Core\Handler\IHandler
	{
		return new Apitte\Core\Handler\ServiceHandler($this);
	}


	public function createServiceApi__core__router(): Apitte\Core\Router\IRouter
	{
		return new Apitte\Core\Router\SimpleRouter($this->getService('api.core.schema'));
	}


	public function createServiceApi__core__schema(): Apitte\Core\Schema\Schema
	{
		return $this->getService('api.core.schema.hydrator')->hydrate([
			[
				'handler' => ['class' => 'App\Module\V2\UserCreateController', 'method' => 'create'],
				'id' => null,
				'tags' => ['Users' => 'Users', 'request.dto' => 'App\Domain\Api\Request\CreateUserReqDto'],
				'methods' => ['POST'],
				'mask' => '/api/v1/users/create',
				'parameters' => [],
				'responses' => [],
				'negotiations' => [],
				'attributes' => ['pattern' => '/api/v1/users/create'],
				'openApi' => ['controller' => [], 'method' => ['summary' => 'Create new user.']],
			],
			[
				'handler' => ['class' => 'App\Module\V2\UsersOneController', 'method' => 'byEmail'],
				'id' => null,
				'tags' => ['Users' => 'Users'],
				'methods' => ['GET'],
				'mask' => '/api/v1/users/email',
				'parameters' => [
					'email' => [
						'name' => 'email',
						'type' => 'string',
						'description' => 'User e-mail address',
						'in' => 'query',
						'required' => true,
						'allowEmpty' => false,
						'deprecated' => false,
					],
				],
				'responses' => [],
				'negotiations' => [],
				'attributes' => ['pattern' => '/api/v1/users/email'],
				'openApi' => ['controller' => [], 'method' => ['summary' => 'Get user by email.']],
			],
			[
				'handler' => ['class' => 'App\Module\V2\UsersOneController', 'method' => 'byId'],
				'id' => null,
				'tags' => ['Users' => 'Users'],
				'methods' => ['GET'],
				'mask' => '/api/v1/users/{id}',
				'parameters' => [
					'id' => [
						'name' => 'id',
						'type' => 'int',
						'description' => 'User ID',
						'in' => 'path',
						'required' => true,
						'allowEmpty' => false,
						'deprecated' => false,
					],
				],
				'responses' => [],
				'negotiations' => [],
				'attributes' => ['pattern' => '/api/v1/users/(?P<id>[^/]+)'],
				'openApi' => ['controller' => [], 'method' => ['summary' => 'Get user by id.']],
			],
			[
				'handler' => ['class' => 'App\Module\V2\UsersController', 'method' => 'endpoints'],
				'id' => null,
				'tags' => ['Users' => 'Users'],
				'methods' => [],
				'mask' => '/api/v1/users',
				'parameters' => [],
				'responses' => [],
				'negotiations' => [],
				'attributes' => ['pattern' => '/api/v1/users'],
				'openApi' => ['controller' => [], 'method' => []],
			],
			[
				'handler' => ['class' => 'App\Module\V2\UsersController', 'method' => 'index'],
				'id' => null,
				'tags' => ['Users' => 'Users'],
				'methods' => ['GET'],
				'mask' => '/api/v1/users',
				'parameters' => [
					'limit' => [
						'name' => 'limit',
						'type' => 'int',
						'description' => 'Data limit',
						'in' => 'query',
						'required' => false,
						'allowEmpty' => false,
						'deprecated' => false,
					],
					'offset' => [
						'name' => 'offset',
						'type' => 'int',
						'description' => 'Data offset',
						'in' => 'query',
						'required' => false,
						'allowEmpty' => false,
						'deprecated' => false,
					],
				],
				'responses' => [],
				'negotiations' => [],
				'attributes' => ['pattern' => '/api/v1/users'],
				'openApi' => ['controller' => [], 'method' => ['summary' => 'List users.']],
			],
		]);
	}


	public function createServiceApi__core__schema__hydrator(): Apitte\Core\Schema\Serialization\ArrayHydrator
	{
		return new Apitte\Core\Schema\Serialization\ArrayHydrator;
	}


	public function createServiceApi__middlewares__api(): Apitte\Middlewares\ApiMiddleware
	{
		return new Apitte\Middlewares\ApiMiddleware(
			$this->getService('api.core.dispatcher'),
			$this->getService('api.core.errorHandler')
		);
	}


	public function createServiceApi__middlewares__autobasepath(): Contributte\Middlewares\AutoBasePathMiddleware
	{
		return new Contributte\Middlewares\AutoBasePathMiddleware;
	}


	public function createServiceApi__openapi__coreDefinition(): Apitte\OpenApi\SchemaDefinition\CoreDefinition
	{
		return new Apitte\OpenApi\SchemaDefinition\CoreDefinition(
			$this->getService('api.core.schema'),
			$this->getService('api.openapi.entityAdapter')
		);
	}


	public function createServiceApi__openapi__entityAdapter(): Apitte\OpenApi\SchemaDefinition\Entity\EntityAdapter
	{
		return new Apitte\OpenApi\SchemaDefinition\Entity\EntityAdapter;
	}


	public function createServiceApi__openapi__schemaBuilder(): Apitte\OpenApi\SchemaBuilder
	{
		$service = new Apitte\OpenApi\SchemaBuilder;
		$service->addDefinition(\Nette\PhpGenerator\Dumper::createObject('Apitte\OpenApi\SchemaDefinition\BaseDefinition', [
		]));
		$service->addDefinition($this->getService('api.openapi.coreDefinition'));
		$service->addDefinition(\Nette\PhpGenerator\Dumper::createObject('Apitte\OpenApi\SchemaDefinition\ArrayDefinition', [
			"\x00Apitte\\OpenApi\\SchemaDefinition\\ArrayDefinition\x00data" => [],
		]));
		return $service;
	}


	public function createServiceApplication__1(): App\Presenters\FrontendPresenter
	{
		$service = new App\Presenters\FrontendPresenter;
		$service->injectPrimary(
			$this,
			$this->getService('application.presenterFactory'),
			$this->getService('02'),
			$this->getService('http.request'),
			$this->getService('http.response'),
			$this->getService('session.session')
		);
		$service->invalidLinkMode = 5;
		return $service;
	}


	public function createServiceApplication__2(): NetteModule\ErrorPresenter
	{
		return new NetteModule\ErrorPresenter($this->getService('monolog.psrToTracyLazyAdapter'));
	}


	public function createServiceApplication__3(): NetteModule\MicroPresenter
	{
		return new NetteModule\MicroPresenter($this, $this->getService('http.request'), $this->getService('02'));
	}


	public function createServiceApplication__application(): Nette\Application\Application
	{
		$service = new Nette\Application\Application(
			$this->getService('application.presenterFactory'),
			$this->getService('02'),
			$this->getService('http.request'),
			$this->getService('http.response')
		);
		$service->catchExceptions = null;
		$service->errorPresenter = 'Error';
		Nette\Bridges\ApplicationDI\ApplicationExtension::initializeBlueScreenPanel(
			$this->getService('tracy.blueScreen'),
			$service
		);
		$this->getService('tracy.bar')->addPanel(new Nette\Bridges\ApplicationTracy\RoutingPanel(
			$this->getService('02'),
			$this->getService('http.request'),
			$this->getService('application.presenterFactory')
		));
		return $service;
	}


	public function createServiceApplication__linkGenerator(): Nette\Application\LinkGenerator
	{
		return new Nette\Application\LinkGenerator(
			$this->getService('02'),
			$this->getService('http.request')->getUrl()->withoutUserInfo(),
			$this->getService('application.presenterFactory')
		);
	}


	public function createServiceApplication__presenterFactory(): Nette\Application\IPresenterFactory
	{
		$service = new Nette\Application\PresenterFactory(new Nette\Bridges\ApplicationDI\PresenterFactoryCallback(
			$this,
			5,
			'/home/vottusuwu/Desktop/asv/backend-php/app/../temp/cache/nette.application/touch'
		));
		$service->setMapping(['*' => ['App', 'Modules\*', 'Presenters\*Presenter']]);
		return $service;
	}


	public function createServiceContainer(): Container_f54806e8a6
	{
		return $this;
	}


	public function createServiceHttp__request(): Nette\Http\Request
	{
		return $this->getService('http.requestFactory')->fromGlobals();
	}


	public function createServiceHttp__requestFactory(): Nette\Http\RequestFactory
	{
		$service = new Nette\Http\RequestFactory;
		$service->setProxy([]);
		return $service;
	}


	public function createServiceHttp__response(): Nette\Http\Response
	{
		return new Nette\Http\Response;
	}


	public function createServiceMiddleware__authenticator(): App\Model\Api\Middleware\AuthenticationMiddleware
	{
		return new App\Model\Api\Middleware\AuthenticationMiddleware(new App\Model\Api\Security\TokenAuthenticator($this->getService('nettrine.orm.entityManagerDecorator')));
	}


	public function createServiceMiddleware__methodOverride(): Contributte\Middlewares\MethodOverrideMiddleware
	{
		return new Contributte\Middlewares\MethodOverrideMiddleware;
	}


	public function createServiceMiddleware__tryCatch(): Contributte\Middlewares\TryCatchMiddleware
	{
		$service = new Contributte\Middlewares\TryCatchMiddleware;
		$service->setDebugMode(true);
		$service->setCatchExceptions(false);
		$service->setLogger($this->getService('monolog.logger.default'));
		return $service;
	}


	public function createServiceMiddlewares__application(): Contributte\Middlewares\Application\MiddlewareApplication
	{
		return new Contributte\Middlewares\Application\MiddlewareApplication($this->getService('middlewares.chain')->create());
	}


	public function createServiceMiddlewares__chain(): Contributte\Middlewares\Utils\ChainBuilder
	{
		$service = new Contributte\Middlewares\Utils\ChainBuilder;
		$service->add($this->getService('middleware.tryCatch'));
		$service->add($this->getService('middlewares.logging'));
		$service->add($this->getService('middleware.methodOverride'));
		$service->add($this->getService('api.middlewares.autobasepath'));
		$service->add($this->getService('middleware.authenticator'));
		$service->add($this->getService('api.middlewares.api'));
		return $service;
	}


	public function createServiceMiddlewares__logging(): Contributte\Middlewares\LoggingMiddleware
	{
		return new Contributte\Middlewares\LoggingMiddleware($this->getService('monolog.logger.default'));
	}


	public function createServiceMonolog__logger__default(): Monolog\Logger
	{
		return new Monolog\Logger(
			'default',
			[$this->getService('monolog.logger.default.handler.0'), $this->getService('monolog.logger.default.handler.tracy')],
			[
				$this->getService('monolog.logger.default.processor.0'),
				$this->getService('monolog.logger.default.processor.1'),
				$this->getService('monolog.logger.default.processor.2'),
				$this->getService('monolog.logger.default.processor.3'),
			]
		);
	}


	public function createServiceMonolog__logger__default__handler__0(): Monolog\Handler\RotatingFileHandler
	{
		return new Monolog\Handler\RotatingFileHandler('/home/vottusuwu/Desktop/asv/backend-php/app/../log/syslog.log', 30, 300);
	}


	public function createServiceMonolog__logger__default__handler__tracy(): Monolog\Handler\PsrHandler
	{
		return new Monolog\Handler\PsrHandler(new Tracy\Bridges\Psr\TracyToPsrLoggerAdapter($this->getService('tracy.logger')));
	}


	public function createServiceMonolog__logger__default__processor__0(): Monolog\Processor\WebProcessor
	{
		return new Monolog\Processor\WebProcessor;
	}


	public function createServiceMonolog__logger__default__processor__1(): Monolog\Processor\IntrospectionProcessor
	{
		return new Monolog\Processor\IntrospectionProcessor;
	}


	public function createServiceMonolog__logger__default__processor__2(): Monolog\Processor\MemoryPeakUsageProcessor
	{
		return new Monolog\Processor\MemoryPeakUsageProcessor;
	}


	public function createServiceMonolog__logger__default__processor__3(): Monolog\Processor\ProcessIdProcessor
	{
		return new Monolog\Processor\ProcessIdProcessor;
	}


	public function createServiceMonolog__psrToTracyAdapter(): Tracy\Bridges\Psr\PsrToTracyLoggerAdapter
	{
		return new Tracy\Bridges\Psr\PsrToTracyLoggerAdapter($this->getService('monolog.logger.default'));
	}


	public function createServiceMonolog__psrToTracyLazyAdapter(): Contributte\Monolog\Tracy\LazyTracyLogger
	{
		return new Contributte\Monolog\Tracy\LazyTracyLogger('monolog.psrToTracyAdapter', $this);
	}


	public function createServiceNettrine__annotations__delegatedReader(): Doctrine\Common\Annotations\AnnotationReader
	{
		$service = new Doctrine\Common\Annotations\AnnotationReader;
		$service->addGlobalIgnoredName('persistent');
		$service->addGlobalIgnoredName('serializationVersion');
		return $service;
	}


	public function createServiceNettrine__annotations__reader(): Doctrine\Common\Annotations\Reader
	{
		return new Doctrine\Common\Annotations\CachedReader(
			$this->getService('nettrine.annotations.delegatedReader'),
			$this->getService('nettrine.cache.driver')
		);
	}


	public function createServiceNettrine__cache__driver(): Doctrine\Common\Cache\Cache
	{
		return new Doctrine\Common\Cache\PhpFileCache('/home/vottusuwu/Desktop/asv/backend-php/app/../temp/cache/nettrine.cache');
	}


	public function createServiceNettrine__dbal__configuration(): Doctrine\DBAL\Configuration
	{
		$service = new Doctrine\DBAL\Configuration;
		$service->setSQLLogger($this->getService('nettrine.dbal.logger'));
		$service->setResultCacheImpl($this->getService('nettrine.cache.driver'));
		$service->setAutoCommit(true);
		return $service;
	}


	public function createServiceNettrine__dbal__connection(): Doctrine\DBAL\Connection
	{
		$service = $this->getService('nettrine.dbal.connectionFactory')->createConnection(
			[
				'driver' => 'pdo_mysql',
				'host' => 'localhost',
				'user' => 'asv',
				'password' => 'lol123',
				'dbname' => 'asv_dev',
				'port' => 5432,
				'types' => [],
				'typesMapping' => [],
			],
			$this->getService('nettrine.dbal.configuration'),
			$this->getService('nettrine.dbal.eventManager.debug')
		);
		if (!$service instanceof Doctrine\DBAL\Connection) {
			throw new Nette\UnexpectedValueException('Unable to create service \'nettrine.dbal.connection\', value returned by factory is not Doctrine\DBAL\Connection type.');
		}
		$profiler = new Nettrine\DBAL\Logger\ProfilerLogger($service);
		$service->getConfiguration()->getSqlLogger()->addLogger($profiler);
		$this->getService('tracy.bar')->addPanel(new Nettrine\DBAL\Tracy\QueryPanel\QueryPanel($profiler));
		$this->getService('tracy.blueScreen')->addPanel(['Nettrine\DBAL\Tracy\BlueScreen\DbalBlueScreen', 'renderException']);
		return $service;
	}


	public function createServiceNettrine__dbal__connectionFactory(): Nettrine\DBAL\ConnectionFactory
	{
		return new Nettrine\DBAL\ConnectionFactory;
	}


	public function createServiceNettrine__dbal__eventManager(): Nettrine\DBAL\Events\ContainerAwareEventManager
	{
		return new Nettrine\DBAL\Events\ContainerAwareEventManager($this);
	}


	public function createServiceNettrine__dbal__eventManager__debug(): Nettrine\DBAL\Events\DebugEventManager
	{
		return new Nettrine\DBAL\Events\DebugEventManager($this->getService('nettrine.dbal.eventManager'));
	}


	public function createServiceNettrine__dbal__logger(): Doctrine\DBAL\Logging\LoggerChain
	{
		$service = new Doctrine\DBAL\Logging\LoggerChain;
		$service->addLogger($this->getService('nettrine.dbal.logger.config'));
		return $service;
	}


	public function createServiceNettrine__dbal__logger__config(): Nettrine\DBAL\Logger\PsrLogger
	{
		return new Nettrine\DBAL\Logger\PsrLogger($this->getService('monolog.logger.default'));
	}


	public function createServiceNettrine__fixtures__fixturesLoader(): Nettrine\Fixtures\Loader\FixturesLoader
	{
		return new Nettrine\Fixtures\Loader\FixturesLoader(['/home/vottusuwu/Desktop/asv/backend-php/db/Fixtures'], $this);
	}


	public function createServiceNettrine__fixtures__loadDataFixturesCommand(): Nettrine\Fixtures\Command\LoadDataFixturesCommand
	{
		return new Nettrine\Fixtures\Command\LoadDataFixturesCommand(
			$this->getService('nettrine.fixtures.fixturesLoader'),
			$this->getService('nettrine.orm.managerRegistry')
		);
	}


	public function createServiceNettrine__migrations__configuration(): Nettrine\Migrations\ContainerAwareConfiguration
	{
		$service = new Nettrine\Migrations\ContainerAwareConfiguration($this->getService('nettrine.dbal.connection'));
		$service->setContainer($this->createServiceContainer());
		$service->setCustomTemplate(null);
		$service->setMigrationsTableName('doctrine_migrations');
		$service->setMigrationsColumnName('version');
		$service->setMigrationsDirectory('/home/vottusuwu/Desktop/asv/backend-php/db/Migrations');
		$service->setMigrationsNamespace('Database\Migrations');
		return $service;
	}


	public function createServiceNettrine__migrations__configurationHelper(): Doctrine\Migrations\Tools\Console\Helper\ConfigurationHelper
	{
		return new Doctrine\Migrations\Tools\Console\Helper\ConfigurationHelper(
			$this->getService('nettrine.dbal.connection'),
			$this->getService('nettrine.migrations.configuration')
		);
	}


	public function createServiceNettrine__migrations__diffCommand(): Doctrine\Migrations\Tools\Console\Command\DiffCommand
	{
		return new Doctrine\Migrations\Tools\Console\Command\DiffCommand;
	}


	public function createServiceNettrine__migrations__executeCommand(): Nettrine\Migrations\Command\FixedExecuteCommand
	{
		return new Nettrine\Migrations\Command\FixedExecuteCommand;
	}


	public function createServiceNettrine__migrations__generateCommand(): Doctrine\Migrations\Tools\Console\Command\GenerateCommand
	{
		return new Doctrine\Migrations\Tools\Console\Command\GenerateCommand;
	}


	public function createServiceNettrine__migrations__latestCommand(): Doctrine\Migrations\Tools\Console\Command\LatestCommand
	{
		return new Doctrine\Migrations\Tools\Console\Command\LatestCommand;
	}


	public function createServiceNettrine__migrations__migrateCommand(): Doctrine\Migrations\Tools\Console\Command\MigrateCommand
	{
		return new Doctrine\Migrations\Tools\Console\Command\MigrateCommand;
	}


	public function createServiceNettrine__migrations__statusCommand(): Doctrine\Migrations\Tools\Console\Command\StatusCommand
	{
		return new Doctrine\Migrations\Tools\Console\Command\StatusCommand;
	}


	public function createServiceNettrine__migrations__upToDateCommand(): Doctrine\Migrations\Tools\Console\Command\UpToDateCommand
	{
		return new Doctrine\Migrations\Tools\Console\Command\UpToDateCommand;
	}


	public function createServiceNettrine__migrations__versionCommand(): Doctrine\Migrations\Tools\Console\Command\VersionCommand
	{
		return new Doctrine\Migrations\Tools\Console\Command\VersionCommand;
	}


	public function createServiceNettrine__orm__annotations__annotationDriver(): Doctrine\ORM\Mapping\Driver\AnnotationDriver
	{
		$service = new Doctrine\ORM\Mapping\Driver\AnnotationDriver($this->getService('nettrine.annotations.reader'));
		$service->addExcludePaths([]);
		$service->addPaths(['/home/vottusuwu/Desktop/asv/backend-php/app/model/Database/Entity']);
		return $service;
	}


	public function createServiceNettrine__orm__cache__cacheConfiguration(): Doctrine\ORM\Cache\CacheConfiguration
	{
		$service = new Doctrine\ORM\Cache\CacheConfiguration;
		$service->setCacheFactory($this->getService('nettrine.orm.cache.cacheFactory'));
		return $service;
	}


	public function createServiceNettrine__orm__cache__cacheFactory(): Doctrine\ORM\Cache\DefaultCacheFactory
	{
		return new Doctrine\ORM\Cache\DefaultCacheFactory(
			$this->getService('nettrine.orm.cache.regions'),
			$this->getService('nettrine.cache.driver')
		);
	}


	public function createServiceNettrine__orm__cache__regions(): Doctrine\ORM\Cache\RegionsConfiguration
	{
		return new Doctrine\ORM\Cache\RegionsConfiguration;
	}


	public function createServiceNettrine__orm__configuration(): Doctrine\ORM\Configuration
	{
		$service = new Doctrine\ORM\Configuration;
		$service->setProxyDir('/home/vottusuwu/Desktop/asv/backend-php/app/../temp/proxies');
		$service->setAutoGenerateProxyClasses(2);
		$service->setProxyNamespace('Nettrine\Proxy');
		$service->setMetadataDriverImpl($this->getService('nettrine.orm.mappingDriver'));
		$service->setCustomStringFunctions([]);
		$service->setCustomNumericFunctions([]);
		$service->setCustomDatetimeFunctions([]);
		$service->setCustomHydrationModes([]);
		$service->setNamingStrategy(new Doctrine\ORM\Mapping\UnderscoreNamingStrategy);
		$service->setEntityListenerResolver($this->getService('nettrine.orm.entityListenerResolver'));
		$service->setQueryCacheImpl($this->getService('nettrine.cache.driver'));
		$service->setHydrationCacheImpl($this->getService('nettrine.cache.driver'));
		$service->setResultCacheImpl($this->getService('nettrine.cache.driver'));
		$service->setMetadataCacheImpl($this->getService('nettrine.cache.driver'));
		$service->setSecondLevelCacheEnabled();
		$service->setSecondLevelCacheConfiguration($this->getService('nettrine.orm.cache.cacheConfiguration'));
		return $service;
	}


	public function createServiceNettrine__orm__entityListenerResolver(): Nettrine\ORM\Mapping\ContainerEntityListenerResolver
	{
		return new Nettrine\ORM\Mapping\ContainerEntityListenerResolver($this);
	}


	public function createServiceNettrine__orm__entityManagerDecorator(): App\Model\Database\EntityManager
	{
		return new App\Model\Database\EntityManager(Doctrine\ORM\EntityManager::create(
			$this->getService('nettrine.dbal.connection'),
			$this->getService('nettrine.orm.configuration'),
			$this->getService('nettrine.dbal.eventManager.debug')
		));
	}


	public function createServiceNettrine__orm__managerRegistry(): Nettrine\ORM\ManagerRegistry
	{
		return new Nettrine\ORM\ManagerRegistry(
			$this->getService('nettrine.dbal.connection'),
			$this->getService('nettrine.orm.entityManagerDecorator'),
			$this
		);
	}


	public function createServiceNettrine__orm__mappingDriver(): Doctrine\Persistence\Mapping\Driver\MappingDriverChain
	{
		$service = new Doctrine\Persistence\Mapping\Driver\MappingDriverChain;
		$service->addDriver($this->getService('nettrine.orm.annotations.annotationDriver'), 'App\Model\Database\Entity');
		return $service;
	}


	public function createServiceResource___App_Module___1(): App\Module\V2\UserCreateController
	{
		return new App\Module\V2\UserCreateController($this->getService('01'));
	}


	public function createServiceResource___App_Module___2(): App\Module\V2\UsersOneController
	{
		return new App\Module\V2\UsersOneController($this->getService('01'));
	}


	public function createServiceResource___App_Module___3(): App\Module\V2\UsersController
	{
		return new App\Module\V2\UsersController($this->getService('01'));
	}


	public function createServiceSession__session(): Nette\Http\Session
	{
		return new Nette\Http\Session($this->getService('http.request'), $this->getService('http.response'));
	}


	public function createServiceSymfony__serializer__annotationLoader(): Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader
	{
		return new Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader(new Doctrine\Common\Annotations\CachedReader(
			$this->getService('symfony.serializer.annotationReader'),
			new Doctrine\Common\Cache\FilesystemCache('/home/vottusuwu/Desktop/asv/backend-php/app/../temp/cache/Symfony.Serializer')
		));
	}


	public function createServiceSymfony__serializer__annotationReader(): Doctrine\Common\Annotations\AnnotationReader
	{
		$service = new Doctrine\Common\Annotations\AnnotationReader;
		$service->addGlobalIgnoredName('phpcsSuppress');
		return $service;
	}


	public function createServiceSymfony__serializer__classMetadataFactory(): Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory
	{
		return new Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory($this->getService('symfony.serializer.annotationLoader'));
	}


	public function createServiceSymfony__serializer__objectNormalizer(): Symfony\Component\Serializer\Normalizer\ObjectNormalizer
	{
		return new Symfony\Component\Serializer\Normalizer\ObjectNormalizer(
			$this->getService('symfony.serializer.classMetadataFactory'),
			new Symfony\Component\Serializer\NameConverter\CamelCaseToSnakeCaseNameConverter,
			null,
			new Symfony\Component\PropertyInfo\Extractor\ReflectionExtractor
		);
	}


	public function createServiceSymfony__serializer__serializer(): Symfony\Component\Serializer\Serializer
	{
		return new Symfony\Component\Serializer\Serializer(
			[
				new Symfony\Component\Serializer\Normalizer\DateTimeNormalizer,
				new Symfony\Component\Serializer\Normalizer\ArrayDenormalizer,
				$this->getService('symfony.serializer.objectNormalizer'),
			],
			[new Symfony\Component\Serializer\Encoder\JsonEncoder]
		);
	}


	public function createServiceSymfony__validator(): Symfony\Component\Validator\Validator\ValidatorInterface
	{
		return $this->getService('symfony.validator.builder')->getValidator();
	}


	public function createServiceSymfony__validator__builder(): Symfony\Component\Validator\ValidatorBuilder
	{
		return Symfony\Component\Validator\Validation::createValidatorBuilder()->enableAnnotationMapping(new Doctrine\Common\Annotations\CachedReader(
			$this->getService('symfony.serializer.annotationReader'),
			new Doctrine\Common\Cache\FilesystemCache('/home/vottusuwu/Desktop/asv/backend-php/app/../temp/cache/Symfony.Validator')
		));
	}


	public function createServiceTracy__bar(): Tracy\Bar
	{
		return Tracy\Debugger::getBar();
	}


	public function createServiceTracy__blueScreen(): Tracy\BlueScreen
	{
		return Tracy\Debugger::getBlueScreen();
	}


	public function createServiceTracy__logger(): Tracy\ILogger
	{
		return Tracy\Debugger::getLogger();
	}


	public function initialize()
	{
		Doctrine\Common\Annotations\AnnotationRegistry::registerUniqueLoader("class_exists");
		// http.
		(function () {
			$response = $this->getService('http.response');
			$response->setHeader('X-Powered-By', 'Nette Framework 3');
			$response->setHeader('Content-Type', 'text/html; charset=utf-8');
			$response->setHeader('X-Frame-Options', 'SAMEORIGIN');
			Nette\Http\Helpers::initCookie($this->getService('http.request'), $response);
		})();
		// php.
		(function () {
			date_default_timezone_set('Europe/Prague');
			ini_set('output_buffering', '4096');
		})();
		// session.
		(function () {
			$this->getService('session.session')->exists() && $this->getService('session.session')->start();
		})();
		// tracy.
		(function () {
			if (!Tracy\Debugger::isEnabled()) { return; }
			Tracy\Debugger::$email = 'dev@dev.dev';
			Tracy\Debugger::$logSeverity = 32767;
			Tracy\Debugger::$strictMode = true;
			$this->getService('session.session')->start();
			Tracy\Debugger::dispatch();
		})();
		Apitte\Debug\Tracy\BlueScreen\ApiBlueScreen::register($this->getService('tracy.blueScreen'));
		Apitte\Debug\Tracy\BlueScreen\ValidationBlueScreen::register($this->getService('tracy.blueScreen'));
		$this->getService("tracy.logger");
		Tracy\Debugger::setLogger($this->getService('monolog.psrToTracyLazyAdapter'));
		Contributte\Monolog\LoggerHolder::setLogger('monolog.logger.default', $this);
	}
}
