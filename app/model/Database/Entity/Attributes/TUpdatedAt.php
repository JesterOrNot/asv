<?php declare(strict_types = 1);

namespace App\Model\Database\Entity\Attributes;

use DateTime;
use Doctrine\ORM\Mapping as ORM;

/**
 * Trait for entities that adds the updatedAt field.
 *
 * @package App\Model\Database\Entity\Attributes
 */
trait TUpdatedAt
{
  /**
   * @var DateTime|NULL
   * @ORM\Column(type="datetime", nullable=TRUE)
   */
  private ?DateTime $updatedAt;

  public function getUpdatedAt(): ?DateTime
  {
    return $this->updatedAt;
  }

  /**
   * Doctrine annotation
   *
   * @ORM\PreUpdate
   * @internal
   */
  public function setUpdatedAt(): void
  {
    $this->updatedAt = new DateTime();
  }
}
