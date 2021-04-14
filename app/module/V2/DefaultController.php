<?php declare(strict_types = 1);

namespace App\Module\V2;

use Apitte\Core\Annotation\Controller\Method;
use Apitte\Core\Annotation\Controller\Path;

/**
 * @Path("/")
 */
class DefaultController extends BaseV2Controller
{

  /**
   * @Path("/")
   * @Method("GET")
   * @return array
   */
  public function index(): array
  {
    return $this->ok([
      'v2' => [
        'state' => 'current',
        'endpoints' => [
          'GET_TEAM_MEMBERS' => '/team',
          'GET_PROJECTS' => '/project/all/:page=1',
          'GET_PROJECT' => '/project/:slug',
          'GET_SETTINGS' => '/settings',
        ],
      ],
    ]);
  }

}
