<?php declare(strict_types = 1);

namespace App\Module\V2;

use Apitte\Core\Annotation\Controller\Id;
use Apitte\Core\Annotation\Controller\Path;
use App\Module\BaseController;

/**
 * @Path("/v2")
 * @Id("v2")
 */
abstract class BaseV2Controller extends BaseController
{}
