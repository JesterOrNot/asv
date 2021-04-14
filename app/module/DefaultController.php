<?php declare(strict_types = 1);

namespace App\Module;

use Apitte\Core\Annotation\Controller\Method;
use Apitte\Core\Annotation\Controller\Path;

/**
 * @Path("/")
 */
class DefaultController extends BaseController
{

  /**
   * @Path("/")
   * @Method("GET")
   */
  public function index(): array
  {
    return $this->ok([
      'apiVersions' => [
        'v1' => [
          'state' => 'shutdown',
        ],
        'v2' => [
          'state' => 'current',
          'path' => '/api/v2',
        ],
      ],
    ]);
  }

}
