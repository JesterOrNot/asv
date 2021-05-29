<?php declare(strict_types=1);

namespace App\Model\Exception\Runtime;

use Apitte\Core\Exception\RuntimeException;
use JetBrains\PhpStorm\Pure;
use Throwable;

class EntityNotFoundException extends RuntimeException
{
  #[Pure]
  public function __construct($message = "The queried resource was not found.", $code = 0, Throwable $previous = null)
  {
    parent::__construct($message, $code, $previous);
  }
}
