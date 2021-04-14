<?php declare(strict_types = 1);

namespace App\Model\Database\Entity;

use App\Model\Database\Entity\Attributes\TCreatedAt;
use App\Model\Database\Entity\Attributes\TUuid;
use DateTime;
use Doctrine\ORM\Mapping as ORM;

/**
 * AccessRecord
 *
 * Record of authenticated user accessing the admin endpoints.
 *
 * @ORM\Table(name="access_records", indexes={@ORM\Index(name="user_id", columns={"user_id"})})
 * @ORM\Entity(repositoryClass="App\Model\Database\Repository\AccessRecordRepository")
 */
class AccessRecord
{

  use TUuid;
  use TCreatedAt;

  /**
   * @var string
   * @ORM\Column(name="endpoint", type="string", length=191, nullable=false)
   */
  private string $endpoint;

  /**
   * @var string
   * @ORM\Column(name="ip", type="string", length=191, nullable=false)
   */
  private string $ip;

  /**
   * @var User
   * @ORM\ManyToOne(targetEntity="User")
   * @ORM\JoinColumns({
   *   @ORM\JoinColumn(name="user_id", referencedColumnName="id")
   * })
   */
  private User $user;

  public function __construct(string $endpoint, string $ip, User $user)
  {
    $this->endpoint = $endpoint;
    $this->ip = $ip;
    $this->user = $user;
    $this->createdAt = new DateTime();
  }

  /**
   * @return string
   */
  public function getEndpoint(): string
  {
    return $this->endpoint;
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

  public function getCreatedAt(): DateTime
  {
    return $this->createdAt;
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
   * @return User
   */
  public function getUser(): User
  {
    return $this->user;
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
   * @return string
   */
  public function getIp(): string
  {
    return $this->ip;
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
