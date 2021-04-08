<?php declare(strict_types = 1);

require __DIR__ . '/../vendor/autoload.php';

use App\Kernel;
use Tracy\Debugger;

$config = Kernel::configure();

if (substr($_SERVER['REQUEST_URI'], 0, 4) === '/api') {
  Debugger::$errorTemplate = __DIR__ . '/../app/resources/tracy/500_api.phtml';
  $config->createContainer()->getByType(Contributte\Middlewares\Application\IApplication::class)->run();
} else {
  $config->addConfig(__DIR__ . '/../app/config/app/nette.neon');
  Debugger::$errorTemplate = __DIR__ . '/../app/resources/tracy/500.phtml';
  $config->createContainer()->getByName("application")->run();
}
