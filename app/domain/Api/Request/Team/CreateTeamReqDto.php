<?php declare(strict_types=1);

namespace App\Domain\Api\Request\Team;

use Symfony\Component\Validator\Constraints as Assert;

class CreateTeamReqDto
{

  /**
   * @var string
   * @Assert\NotBlank
   */
  public string $fullName;

  /**
   * @var string
   * @Assert\NotBlank
   */
  public string $position;

  /**
   * @var string|null
   * @Assert\NotBlank(allowNull=true)
   */
  public ?string $image;

}
