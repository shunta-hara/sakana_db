import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { GetListDto } from 'api/common/dto/getList.dto';
import { SongService } from 'api/song/song.service';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get(':id')
  getSong(@Param('id') id: string) {
    return this.songService.getSong(id);
  }

  @Post('list')
  getSongList(@Body() body: GetListDto) {
    return this.songService.getSongList(body);
  }
}
