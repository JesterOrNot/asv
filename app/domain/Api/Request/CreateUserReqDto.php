<?php declare(strict_types = 1);

namespace App\Domain\Api\Request;

use Symfony\Component\Validator\Constraints as Assert;

final class CreateUserReqDto extends AuthenticateUserReqDto
{

  /**
   * @var string
   * @Assert\NotBlank
   * @Assert\Email
   */
  public string $email;

}
