<?php declare(strict_types = 1);

namespace App\Model\Database\Entity\Attributes;

use Doctrine\ORM\Mapping as ORM;

/**
 * Trait for entities that adds the id field.
 *
 * @package App\Model\Database\Entity\Attributes
 */
trait TId
{
  /**
   * @var int
   *
   * @ORM\Id
   * @ORM\Column(type="integer")
   * @ORM\GeneratedValue
   */
  private int $id;

  /**
   * @return int
   */
  public function getId(): int
  {
    return $this->id;
  }

  /**
   * @param int $id
   * @return self
   */
  public function setId(int $id): self
  {
    $this->id = $id;
    return $this;
  }
}
