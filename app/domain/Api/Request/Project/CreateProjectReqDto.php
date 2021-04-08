<?php declare(strict_types = 1);

namespace App\Domain\Api\Request\Project;

use Symfony\Component\Validator\Constraints as Assert;

class CreateProjectReqDto
{

  /**
   * @var string
   * @Assert\NotBlank
   */
  public string $name;

  /**
   * @var string
   * @Assert\NotBlank
   */
  public string $slug;

}
