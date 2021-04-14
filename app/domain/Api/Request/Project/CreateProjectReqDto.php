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
   * @var string|string[]
   * @Assert\NotBlank
   */
  public string | array $type;

  /**
   * @var string
   * @Assert\NotBlank
   */
  public string $description;

  /** @var ?string */
  public ?string $address;

  /** @var ?string */
  public ?string $slug;

  /** @var ?string[] */
  public ?array $images;

  /** @var ?string */
  public ?string $website;

}
