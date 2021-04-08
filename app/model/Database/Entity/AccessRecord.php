<?php declare(strict_types = 1);

namespace App\Model\Database\Entity;

use App\Model\Database\Entity\Attributes\TCreatedAt;
use App\Model\Database\Entity\Attributes\TId;
use DateTime;
use Doctrine\ORM\Mapping as ORM;

/**
 * AccessRecord
 *
 * Record of authenticated user accessing the admin endpoints.
 *
 * @ORM\Table(name="AccessRecord", indexes={@ORM\Index(name="userId", columns={"userId"})})
 * @ORM\Entity
 */
class AccessRecord
{
  use TId;
  use TCreatedAt;

  public function __construct(
    string $endpoint,
    string $ip
  )
  {
    $this->endpoint = $endpoint;
    $this->ip = $ip;
  }

  /**
   * @var string
   *
   * @ORM\Column(name="endpoint", type="string", length=191, nullable=false)
   */
  private string $endpoint;

  /**
   * @var string
   *
   * @ORM\Column(name="ip", type="string", length=191, nullable=false)
   */
  private string $ip;

  /**
   * @var User
   *
   * @ORM\ManyToOne(targetEntity="User")
   * @ORM\JoinColumns({
   *   @ORM\JoinColumn(name="userId", referencedColumnName="id")
   * })
   */
  private User $user;

  /**
   * @param string $id
   * @return AccessRecord
   */
  public function setId(string $id): self
  {
    $this->id = $id;
    return $this;
  }

  /**
   * @param string $endpoint
   * @return self
   */
  public function setEndpoint(string $endpoint): self
  {
    $this->endpoint = $endpoint;
    return $this;
  }

  /**
   * @param DateTime $createdAt
   * @return self
   */
  public function setCreatedAt(DateTime $createdAt): self
  {
    $this->createdAt = $createdAt;
    return $this;
  }

  /**
   * @param User $user
   * @return self
   */
  public function setUser(User $user): self
  {
    $this->user = $user;
    return $this;
  }

  /**
   * @param string $ip
   * @return AccessRecord
   */
  public function setIp(string $ip): self
  {
    $this->ip = $ip;
    return $this;
  }
}
