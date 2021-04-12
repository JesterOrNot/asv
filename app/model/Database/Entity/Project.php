<?php declare(strict_types = 1);

namespace App\Model\Database\Entity;

use App\Model\Database\Entity\Attributes\TUuid;
use Cocur\Slugify\Slugify;
use Doctrine\ORM\Mapping as ORM;
use RuntimeException;

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

  public const TYPES = [
    'office',
    'residential_mixed',
    'retail'
  ];

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
   * @var string|null
   *
   * @ORM\Column(name="website", type="string", length=191, nullable=true)
   */
  private ?string $website;

  /**
   * @var string
   *
   * @ORM\Column(name="description", type="text", nullable=false)
   */
  private string $description;

  /**
   * @var string|null
   *
   * @ORM\Column(name="address", type="text", nullable=true)
   */
  private ?string $address;

  /**
   * @var string[]
   *
   * @ORM\Column(name="types", type="simple_array", nullable=false)
   */
  private array $types;

  /**
   * @var string[]
   *
   * @ORM\Column(name="images", type="array")
   */
  private array $images;

  public function __construct(string $name, string|array $type, string $description, ?string $address = null, ?string $slug = null, ?array $images = null, ?string $website = null)
  {
    $this->name = $name;
    $this->description = $description;
    $this->address = $address;
    $this->types = is_string($type) ? [ $type ] : $type;
    $this->slug = $slug ?? Slugify::create()->slugify($name);
    $this->images = $images ?? [ '/images/projects/' . $this->slug . '.png' ];
    $this->website = $website;
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
   * @return string
   */
  public function getDescription(): string
  {
    return $this->description;
  }

  /**
   * @param string $description
   */
  public function setDescription(string $description): void
  {
    $this->description = $description;
  }

  /**
   * @return string|null
   */
  public function getAddress(): ?string
  {
    return $this->address;
  }

  /**
   * @param string|null $address
   */
  public function setAddress(?string $address): void
  {
    $this->address = $address;
  }

  /**
   * @return string[]
   */
  public function getTypes(): array
  {
    return $this->types;
  }

  /**
   * @param string|string[] $types
   */
  public function setTypes(string|array $types): void
  {
    if (is_string($types)) $types = [ $types ];

    foreach ($types as $t) {
      if (!in_array($t, self::TYPES))
        throw new RuntimeException("Invalid type $t");
    }

    $this->types = $types;
  }

  /**
   * @param string|string[] $types
   */
  public function addTypes(string|array $types): void
  {
    if (is_string($types)) $types = [ $types ];

    foreach ($types as $t) {
      if (!in_array($t, self::TYPES))
        throw new RuntimeException("Invalid type $t");
    }

    $this->types = array_merge($this->types, $types);
  }

  /**
   * @return string|null
   */
  public function getWebsite(): ?string
  {
    return $this->website;
  }

  /**
   * @param string|null $website
   */
  public function setWebsite(?string $website): void
  {
    $this->website = $website;
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
