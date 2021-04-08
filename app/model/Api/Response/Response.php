<?php declare(strict_types = 1);

namespace App\Model\Api\Response;

use JetBrains\PhpStorm\ArrayShape;

/**
 * This class implements VottusCode/response-spec
 *
 * @package App\Model\Api\Response
 */
class Response
{
  /**
   * @param array $data
   * @return array
   */
  #[ArrayShape([ "success" => "bool", "data" => "" ])] public static function ok(array $data): array
  {
    return [
      "success" => true,
      "data" => $data,
    ];
  }

  /**
   * @param BaseError $error
   * @return array
   */
  #[ArrayShape([ "success" => "false", "error" => "\App\Model\Response\BaseError" ])]
  public static function err(BaseError $error): array
  {
    return [
      "success" => false,
      "error" => $error,
    ];
  }
}
