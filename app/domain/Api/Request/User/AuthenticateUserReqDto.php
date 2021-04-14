<?php declare(strict_types = 1);

namespace App\Domain\Api\Request\User;

use Symfony\Component\Validator\Constraints as Assert;

class AuthenticateUserReqDto
{

  /**
   * @var string
   * @Assert\NotBlank
   */
  public string $username;

  /**
   * @var string
   * @Assert\NotBlank
   */
  public string $password;

}
