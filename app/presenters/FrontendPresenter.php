<?php declare(strict_types = 1);

namespace App\Presenters;

use JetBrains\PhpStorm\NoReturn;
use Nette\Application\AbortException;
use Nette\Application\BadRequestException;
use Nette\Application\Responses\FileResponse;
use Nette\Application\UI\Presenter;

class FrontendPresenter extends Presenter
{

  /**
   * @throws BadRequestException
   * @throws AbortException
   */
  #[NoReturn] public function actionDefault()
  {
    $this->sendResponse(new FileResponse(__DIR__ . "/../resources/index.html", contentType: "text/html", forceDownload: false));
  }

}
