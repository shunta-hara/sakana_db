import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GetListDto } from 'api/common/dto/getList.dto';
import { ReleaseService } from 'api/release/release.service';

@Controller('releases')
export class ReleaseController {
  constructor(private readonly releaseService: ReleaseService) {}

  @Get(':id')
  getRelease(@Param('id') id: string) {
    return this.releaseService.getRelease(id);
  }

  @Post('list')
  getReleaseList(@Body() body: GetListDto) {
    return this.releaseService.getReleaseList(body);
  }
}
