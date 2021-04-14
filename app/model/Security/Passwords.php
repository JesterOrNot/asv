<?php declare(strict_types = 1);

namespace App\Model\Security;

use Nette\Security\Passwords as NettePasswords;

final class Passwords extends NettePasswords
{

  #[Pure] public function __construct(array $options = [])
  {
    parent::__construct(PASSWORD_ARGON2ID, $options);
  }

  #[Pure] public static function create(array $options = []): Passwords
  {
    return new Passwords($options);
  }

}
