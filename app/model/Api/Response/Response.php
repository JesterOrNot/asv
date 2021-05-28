<?php declare(strict_types = 1);

namespace App\Model\Api\Response;

/**
 * This class implements VottusCode/response-spec
 */
class Response
{

  /**
   * @param array $data
   * @return array
   */
  public static function ok(array $data = [ 'message' => 'success' ]): array
  {
    return [
      'success' => true,
      'data' => $data,
    ];
  }

  /**
   * @param BaseError $error
   * @return array
   */
  public static function err(BaseError $error): array
  {
    return [
      'success' => false,
      'error' => $error,
    ];
  }

}
