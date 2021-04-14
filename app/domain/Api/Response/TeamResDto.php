<?php declare(strict_types = 1);

namespace App\Domain\Api\Response;

use App\Model\Database\Entity\Team;

final class TeamResDto
{

  /** @var int */
  public int $id;

  /** @var string */
  public string $fullName;

  /** @var string */
  public string $position;

  /** @var string|null */
  public ?string $image;

  /**
   * @param Team[] $teams
   * @return self[]
   */
  public static function fromMany(array $teams): array
  {
    $result = [];
    foreach ($teams as $team) $result[] = self::from($team);

    return $result;
  }

  public static function from(Team $team): self
  {
    $self = new self();

    $self->id = $team->getId();
    $self->fullName = $team->getFullName();
    $self->position = $team->getPosition();
    $self->image = $team->getImage();

    return $self;
  }

}
