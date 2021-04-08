<?php declare(strict_types = 1);

namespace App\Domain\Api\Response;

use App\Model\Database\Entity\AccessRecord;
use App\Model\Database\Entity\Project;
use DateTimeInterface;
use JetBrains\PhpStorm\Pure;

final class AccessRecordResDto
{
  /** @var string */
  public string $id;

  /** @var string */
  public string $endpoint;

  /** @var string */
  public string $ip;

  /** @var DateTimeInterface */
  public DateTimeInterface $createdAt;

  /** @var UserResDto */
  public UserResDto $user;


  #[Pure] public static function from(AccessRecord $record): self
  {
    $self = new self();

    $self->id = $record->getId();
    $self->endpoint = $record->getEndpoint();
    $self->ip = $record->getIp();
    $self->createdAt = $record->getCreatedAt();
    $self->user = UserResDto::from($record->getUser());

    return $self;
  }

  /**
   * @param AccessRecord[] $records
   * @return self[]
   */
  #[Pure] public static function fromMany(array $records): array
  {
    $result = [];
    foreach ($records as $record) $result[] = AccessRecordResDto::from($record);

    return $result;
  }
}
