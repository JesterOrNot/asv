<?php declare(strict_types = 1);

namespace App\Model\Api\Response;

/**
 * @package App\Model\Api\Response
 */
class BaseError
{
  public string $kind = "INTERNAL";

  public string $message = "Internal Server Error";

  /**
   * @param string $kind Error Kind
   * @param string $message Error Message
   */
  public function __construct(
    string $kind = "INTERNAL",
    string $message = "Internal Server Error"
  )
  {
    $this->kind = $kind;
    $this->message = $message;
  }

  /**
   * @param string $kind
   * @param string $message
   * @return BaseError
   */
  public static function make(
    string $kind = "INTERNAL",
    string $message = "Internal Server Error"
  )
  {
    return new BaseError($kind, $message);
  }

  /**
   * @return string
   */
  public function getKind(): string
  {
    return $this->kind;
  }

  /**
   * @return string
   */
  public function getMessage(): string
  {
    return $this->message;
  }
}
