import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { FormattedResponse } from './common/utils/response.utils';
import { formatResponse } from './common/utils/response.utils';
import { HTTPStatusCode as Code } from './common/enums/response.enums';

@Controller('health')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): FormattedResponse {
    const message = this.appService.getHello();
    return formatResponse(Code.OK, true, message);
  }

  @Get('/db')
  checkMongoConnection(): FormattedResponse {
    const dbName = this.appService.checkDb();
    return formatResponse(Code.OK, true, '', { dbName });
  }
}
