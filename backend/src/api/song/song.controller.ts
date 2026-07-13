import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { GetListDto } from 'api/common/dto/getList.dto';
import { SongService } from 'api/song/song.service';
import { BaseController } from 'api/common/base/base.controller';

@Controller('songs')
export class SongController extends BaseController {
  constructor(private readonly songService: SongService) {
    super();
  }

  @Get(':id')
  getSong(@Param('id') id: string) {
    return this.songService.getSong(id);
  }

  @Post('list')
  getSongList(@Body() body: GetListDto) {
    return this.handleList(this.songService.getSongList(body), body.limit, body.offset);
  }
}
