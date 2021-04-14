<?php declare(strict_types = 1);

namespace App\Domain\Api\Response;

use App\Model\Database\Entity\User;
use DateTimeInterface;

final class UserResDto
{

  /** @var string */
  public string $id;

  /** @var string */
  public string $email;

  /** @var string */
  public string $username;

  /** @var DateTimeInterface */
  public DateTimeInterface $createdAt;

  /** @var DateTimeInterface|null */
  public ?DateTimeInterface $updatedAt;

  /**
   * @param User[] $users
   * @return self[]
   */
  #[Pure] public static function fromMany(array $users): array
  {
    $result = [];
    foreach ($users as $user) $result[] = self::from($user);

    return $result;
  }

  #[Pure] public static function from(User $user): self
  {
    $self = new self();

    $self->id = $user->getId();
    $self->email = $user->getEmail();
    $self->username = $user->getUsername();
    $self->createdAt = $user->getCreatedAt();
    $self->updatedAt = $user->getUpdatedAt();

    return $self;
  }

}
