<?php declare(strict_types = 1);

namespace App\Model\Database\Entity;

use App\Model\Database\Entity\Attributes\TUuid;
use Doctrine\ORM\Mapping as ORM;

/**
 * Project
 *
 * All ASV Group projects
 *
 * @ORM\Table(name="projects", uniqueConstraints={@ORM\UniqueConstraint(name="slug_unique", columns={"slug"})})
 * @ORM\Entity(repositoryClass="App\Model\Database\Repository\ProjectRepository")
 */
class Project
{
  use TUuid;

  /**
   * @var string
   *
   * @ORM\Column(name="name", type="string", length=191, nullable=false)
   */
  private string $name;
  /**
   * @var string
   *
   * @ORM\Column(name="slug", type="string", length=191, nullable=false)
   */
  private string $slug;

  public function __construct(string $name, string $slug)
  {
    $this->name = $name;
    $this->slug = $slug;
  }

  /**
   * @return string
   */
  public function getName(): string
  {
    return $this->name;
  }

  /**
   * @param string $name
   */
  public function setName(string $name): void
  {
    $this->name = $name;
  }

  /**
   * @return string
   */
  public function getSlug(): string
  {
    return $this->slug;
  }

  /**
   * @param string $slug
   */
  public function setSlug(string $slug): void
  {
    $this->slug = $slug;
  }
}
