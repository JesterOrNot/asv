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

  /**
   * @var string[]
   *
   * @ORM\Column(name="images", type="array")
   */
  private array $images;

  public function __construct(string $name, string $slug, array $images = [])
  {
    $this->name = $name;
    $this->slug = $slug;
    $this->images = $images;
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
   * @return self
   */
  public function setName(string $name): self
  {
    $this->name = $name;
    return $this;
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
   * @return self
   */
  public function setSlug(string $slug): self
  {
    $this->slug = $slug;
    return $this;
  }

  /**
   * @return string[]
   */
  public function getImages(): array
  {
    return $this->images;
  }

  /**
   * @param string[] $images
   * @return self
   */
  public function setImages(array $images): self
  {
    $this->images = $images;
    return $this;
  }

  /**
   * @param string $image
   * @return self
   */
  public function addImage(string $image): self
  {
    $this->images[] = $image;
    return $this;
  }

  /**
   * @param string[] $images
   * @return self
   */
  public function addImages(array $images): self
  {
    $this->images = array_merge($this->images, $images);
    return $this;
  }

}
