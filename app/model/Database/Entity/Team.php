<?php declare(strict_types = 1);

namespace App\Model\Database\Entity;

use App\Model\Database\Entity\Attributes\TId;
use Doctrine\ORM\Mapping as ORM;

/**
 * Team
 *
 * The ASVGroup Team
 *
 * @ORM\Table(name="Team", uniqueConstraints={@ORM\UniqueConstraint(name="Team.fullName_unique", columns={"fullName"})})
 * @ORM\Entity
 */
class Team
{
  use TId;

  public function __construct(
    string $fullName,
    string $position,
    ?string $image
  )
  {
    $this->fullName = $fullName;
    $this->position = $position;
    $this->image = $image;
  }

  /**
   * @var string
   *
   * @ORM\Column(name="fullName", type="string", length=191, nullable=false)
   */
  private string $fullName;

  /**
   * @var string
   *
   * @ORM\Column(name="position", type="string", length=191, nullable=false)
   */
  private string $position;

  /**
   * @var ?string
   *
   * @ORM\Column(name="image", type="string", length=191, nullable=true)
   */
  private ?string $image;

  /**
   * @return string
   */
  public function getFullName(): string
  {
    return $this->fullName;
  }

  /**
   * @param string $fullName
   * @return Team
   */
  public function setFullName(string $fullName): self
  {
    $this->fullName = $fullName;
    return $this;
  }

  /**
   * @return string
   */
  public function getPosition(): string
  {
    return $this->position;
  }

  /**
   * @param string $position
   * @return Team
   */
  public function setPosition(string $position): self
  {
    $this->position = $position;
    return $this;
  }

  /**
   * @return string|null
   */
  public function getImage(): ?string
  {
    return $this->image;
  }

  /**
   * @param string|null $image
   * @return $this
   */
  public function setImage(?string $image): self
  {
    $this->image = $image;
    return $this;
  }
}