import { Controller, Get, Param } from '@nestjs/common';
import { SongService } from './song.service';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get(':id')
  getSong(@Param('id') id: string) {
    return this.songService.getSong(id);
  }

  @Get()
  getAllSongs() {
    return this.songService.getAllSongs();
  }
}
