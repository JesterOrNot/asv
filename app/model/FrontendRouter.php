<?php declare(strict_types=1);

namespace App\Model;

use JetBrains\PhpStorm\ArrayShape;
use Nette;
use Nette\Routing\Router;

class FrontendRouter implements Router
{
  /**
   * Match all routes to Frontend:default,
   * which renders out the HTML generated by Vite and where
   * Vue takes over with client side routing.
   *
   * @param Nette\Http\IRequest $httpRequest
   * @return string[]|null
   */
  #[ArrayShape([ 'presenter' => "string", 'action' => "string" ])]
  function match(Nette\Http\IRequest $httpRequest): ?array
  {
    return [
      'presenter' => 'Frontend',
      'action' => 'default'
    ];
  }

  function constructUrl(array $params, Nette\Http\UrlScript $refUrl): ?string
  {
    return '/';
  }
}
