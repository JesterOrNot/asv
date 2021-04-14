<?php declare(strict_types = 1);

namespace App\Presenters;

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
  public function actionDefault(): void
  {
    $this->sendResponse(new FileResponse(__DIR__ . '/../resources/index.html', contentType: 'text/html', forceDownload: false));
  }

}
