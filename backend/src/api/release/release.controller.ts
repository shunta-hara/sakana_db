import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GetListDto } from 'api/common/dto/getList.dto';
import { ReleaseService } from 'api/release/release.service';
import { BaseController } from 'api/common/base/base.controller';

@Controller('releases')
export class ReleaseController extends BaseController {
  constructor(private readonly releaseService: ReleaseService) {
    super();
  }

  @Get(':id')
  getRelease(@Param('id') id: string) {
    return this.releaseService.getRelease(id);
  }

  @Post('list')
  getReleaseList(@Body() body: GetListDto) {
    return this.handleList(this.releaseService.getReleaseList(body), body.limit, body.offset);
  }
}
