<?php declare(strict_types = 1);

namespace App\Model\Api\Security;

use App\Model\Database\Entity\User;
use App\Model\Database\EntityManager;
use Firebase\JWT\JWT;
use Nette\Utils\Strings;
use Psr\Http\Message\ServerRequestInterface;
use UnexpectedValueException;

class TokenAuthenticator extends AbstractAuthenticator
{

  private const HEADER_TOKEN = 'Authorization';
  private const TOKEN_PREFIX = 'Bearer';

  /** @var EntityManager */
  private EntityManager $em;

  public function __construct(EntityManager $em)
  {
    $this->em = $em;
  }

  public function authenticate(ServerRequestInterface $request): ?User
  {
    $token = $this->parseFromHeader($request);
    if (!$token) return null;

    try {
      $jwt = JWT::decode($token, '', [ 'HS256' ]);

      $user = $this->em->getUserRepository()->findOneBy([ 'id' => $jwt->userId ]);
      if (!$user) return null;

      return $user;
    } catch (UnexpectedValueException) {
      return null;
    }
  }

  private function parseFromHeader(ServerRequestInterface $request): ?string
  {
    return $request->hasHeader(self::HEADER_TOKEN)
      ? Strings::startsWith($request->getHeaderLine(self::HEADER_TOKEN), self::TOKEN_PREFIX)
        ? Strings::replace($request->getHeaderLine(self::HEADER_TOKEN), self::TOKEN_PREFIX)
        : null
      : null;
  }

}
