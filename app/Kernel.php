<?php declare(strict_types = 1);

namespace App;

use Contributte\Bootstrap\ExtraConfigurator;
use Nette\DI\Compiler;

class Kernel
{
  public static function configure()
  {
    $configurator = new ExtraConfigurator();
    $configurator->setTempDirectory(__DIR__ . "/../temp");

    // Disable default extensions
    unset($configurator->defaultExtensions["security"]);

    $configurator->onCompile[] = function (
      ExtraConfigurator $configurator,
      Compiler $compiler
    ): void {
      // Add env variables to config structure
      $compiler->addConfig([ "parameters" => $configurator->getEnvironmentParameters() ]);
    };

    // According to NETTE_DEBUG env
    //$configurator->setEnvDebugMode();

    // Enable tracy and configure it
    $configurator->enableTracy(__DIR__ . "/../log");

    // Provide some parameters
    $configurator->addParameters([
      "rootDir" => realpath(__DIR__ . "/.."),
      "appDir" => __DIR__,
      "wwwDir" => realpath(__DIR__ . "/../public"),
    ]);

    // Load development or production config
    if (getenv("NETTE_ENV", true) === "dev") {
      $configurator->addConfig(__DIR__ . "/config/env/dev.neon");
    } else {
      $configurator->addConfig(__DIR__ . "/config/env/prod.neon");
    }

    $configurator->addConfig(__DIR__ . "/config/config.local.neon");

    return $configurator;
  }
}
