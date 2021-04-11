<?php declare(strict_types = 1);

namespace App\Model\Database\Entity;

use App\Model\Database\Entity\Attributes\TCreatedAt;
use App\Model\Database\Entity\Attributes\TUuid;
use App\Model\Database\Entity\Attributes\TUpdatedAt;
use App\Model\Security\Passwords;
use Doctrine\ORM\Mapping as ORM;

/**
 * User
 *
 * Admin users
 *
 * @ORM\Table(name="users", uniqueConstraints={@ORM\UniqueConstraint(name="email_unique", columns={"email"}), @ORM\UniqueConstraint(name="username_unique", columns={"username"})})
 * @ORM\Entity(repositoryClass="App\Model\Database\Repository\UserRepository")
 */
class User
{
  use TUuid;
  use TCreatedAt;
  use TUpdatedAt;

  const ROLES = [ "USER", "ADMIN" ];

  /**
   * @var string
   *
   * @ORM\Column(name="username", type="string", length=191, nullable=false)
   */
  private string $username;
  /**
   * @var string
   *
   * @ORM\Column(name="email", type="string", length=191, nullable=false)
   */
  private string $email;
  /**
   * @var string
   *
   * @ORM\Column(name="password", type="string", length=191, nullable=false)
   */
  private string $password;
  /**
   * @var string
   *
   * @ORM\Column(name="role", type="string", length=191, nullable=false, options={"default"="USER"})
   */
  private string $role;

  public function __construct(
    string $username,
    string $email,
    string $password,
    string $role = self::ROLES[0]
  )
  {
    $this->username = $username;
    $this->email = $email;
    $this->password = Passwords::create()->hash($password);
    $this->role = $role;
    $this->createdAt = new \DateTime();
    $this->updatedAt = new \DateTime();
  }

  /**
   * @return string
   */
  public function getUsername(): string
  {
    return $this->username;
  }

  /**
   * @param string $username
   * @return User
   */
  public function setUsername(string $username): self
  {
    $this->username = $username;
    return $this;
  }

  /**
   * @return string
   */
  public function getEmail(): string
  {
    return $this->email;
  }

  /**
   * @param string $email
   * @return self
   */
  public function setEmail(string $email): self
  {
    $this->email = $email;
    return $this;
  }

  /**
   * @return string
   */
  public function getPassword(): string
  {
    return $this->password;
  }

  /**
   * @param string $password
   * @return self
   */
  public function setPassword(string $password): self
  {
    $this->password = $password;
    return $this;
  }

  /**
   * @return string
   */
  public function getRole(): string
  {
    return $this->role;
  }

  /**
   * @param string $role
   * @return self
   */
  public function setRole(string $role): self
  {
    $this->role = $role;
    return $this;
  }
}
