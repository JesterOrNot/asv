<?php declare(strict_types = 1);

namespace App\Model\Database\Entity\Attributes;

use \DateTime;
use Doctrine\ORM\Mapping as ORM;

/**
 * Trait for entities that adds the createdAt field.
 *
 * @package App\Model\Database\Entity\Attributes
 */
trait TCreatedAt
{
	/**
	 * @var DateTime
	 * @ORM\Column(type="datetime", nullable=FALSE)
	 */
	private DateTime $createdAt;

	public function getCreatedAt(): DateTime
	{
		return $this->createdAt;
	}

	/**
	 * @ORM\PrePersist
	 * @internal
	 */
	public function setCreatedAt(): void
	{
		$this->createdAt = new DateTime();
	}
}
