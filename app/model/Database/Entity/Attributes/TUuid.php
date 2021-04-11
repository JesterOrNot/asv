<?php declare(strict_types = 1);

namespace App\Model\Database\Entity\Attributes;

use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Doctrine\UuidGenerator;

/**
 * Trait for entities that adds the id field.
 *
 * @package App\Model\Database\Entity\Attributes
 */
trait TUuid
{
  /**
   * @var string
   *
   * @ORM\Column(type="uuid", unique=true)
   * @ORM\Id
   * @ORM\GeneratedValue(strategy="CUSTOM")
   * @ORM\CustomIdGenerator(class=UuidGenerator::class)
   */
  private string $id;

  /**
   * @return string
   */
  public function getId(): string
  {
    return $this->id;
  }

  /**
   * @param string $id
   * @return self
   */
  public function setId(string $id): self
  {
    $this->id = $id;
    return $this;
  }
}
