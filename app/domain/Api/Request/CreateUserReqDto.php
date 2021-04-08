<?php declare(strict_types = 1);

namespace App\Domain\Api\Request;

use Symfony\Component\Validator\Constraints as Assert;

final class CreateUserReqDto
{
  /**
   * @var string
   * @Assert\NotBlank
   */
  public string $username;

  /**
   * @var string
   * @Assert\NotBlank
   * @Assert\Email
   */
  public string $email;

  /**
   * @var string
   * @Assert\NotBlank
   */
  public string $password;
}
