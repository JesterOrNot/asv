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

	/** @var DateTimeInterface */
  public DateTimeInterface $updatedAt;

	public static function from(User $user): self
	{
		$self = new self();

		$self->id = $user->getId();
		$self->email = $user->getEmail();
		$self->username = $user->getName();
		$self->createdAt = $user->getSurname();
		$self->updatedAt = $user->getFullname();

		return $self;
	}
}
