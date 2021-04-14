<?php declare(strict_types = 1);

namespace App\Domain\Api\Response;

use App\Model\Database\Entity\Project;

final class ProjectResDto
{

  /** @var string */
  public string $id;

  /** @var string */
  public string $name;

  /** @var string[ */
  public array $types;

  /** @var string */
  public string $description;

  /** @var string|null */
  public ?string $address;

  /** @var string|null */
  public ?string $website;

  /** @var string */
  public string $slug;

  /** @var string[] */
  public array $images;

  /**
   * @param Project[] $projects
   * @return self[]
   */
  #[Pure] public static function fromMany(array $projects): array
  {
    $result = [];
    foreach ($projects as $project) $result[] = self::from($project);

    return $result;
  }

  #[Pure] public static function from(Project $project): self
  {
    $self = new self();

    $self->id = $project->getId();
    $self->name = $project->getName();
    $self->types = $project->getTypes();
    $self->description = $project->getDescription();
    $self->address = $project->getAddress();
    $self->website = $project->getWebsite();
    $self->slug = $project->getSlug();
    $self->images = $project->getImages();

    return $self;
  }

}
