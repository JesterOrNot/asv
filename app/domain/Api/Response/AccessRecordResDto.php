<?php declare(strict_types = 1);

namespace App\Domain\Api\Response;

use App\Model\Database\Entity\AccessRecord;
use DateTimeInterface;

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

  /**
   * @param AccessRecord[] $records
   * @return self[]
   */
  #[Pure] public static function fromMany(array $records): array
  {
    $result = [];
    foreach ($records as $record) $result[] = self::from($record);

    return $result;
  }

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

}
