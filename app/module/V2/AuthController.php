<?php declare(strict_types = 1);

namespace App\Module\V2;

use Apitte\Core\Annotation\Controller\Method;
use Apitte\Core\Annotation\Controller\OpenApi;
use Apitte\Core\Annotation\Controller\Path;
use Apitte\Core\Annotation\Controller\Tag;
use Apitte\Core\Http\ApiRequest;
use App\Model\Api\Security\TokenAuthenticator;
use App\Model\Exception\Runtime\AuthenticationException;

/**
 * @Path("/auth")
 */
class AuthController extends BaseV2Controller
{

  public function __construct(private TokenAuthenticator $auth)
  {
  }

  /**
   * @OpenApi("
   *  summary: Authentication endpoint
   * ")
   * @Path("/login")
   * @Method("POST")
   * @Tag("request.dto", value="App\Domain\Api\Request\AuthenticateUserReqDto")
   * @param ApiRequest $req
   * @return array
   * @throws AuthenticationException
   */
  public function login(ApiRequest $req): array
  {
    $user = $this->auth->authenticate($req);
    if (!$user) throw new AuthenticationException('Neznámé uživatelské jméno nebo heslo.');

    $token = $this->auth->createUserToken($user);

    return $this->ok([
      'token' => $token,
    ]);
  }

}
