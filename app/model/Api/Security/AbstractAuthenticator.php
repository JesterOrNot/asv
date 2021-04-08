<?php declare(strict_types = 1);

namespace App\Model\Api\Security;

use App\Model\Database\Entity\User;
use Contributte\Middlewares\Security\IAuthenticator;
use Firebase\JWT\JWT;

abstract class AbstractAuthenticator implements IAuthenticator
{

  // TODO: remove inline secret
  private const JWT_SECRET = "testtesttestremovethis";

  /**
   * @param string $token
   * @return object
   */
  public function decodeJwt(string $token): object
  {
    return JWT::decode($token, self::JWT_SECRET);
  }

  /**
   * @param array $payload
   * @return string
   */
  public function encodeJwt(array $payload): string
  {
    return JWT::encode($payload, self::JWT_SECRET);
  }

  /**
   * @param User $user
   * @return string
   */
  public function createUserToken(User $user): string
  {
    return $this->encodeJwt(["userId" => $user->getId()]);
  }

}
