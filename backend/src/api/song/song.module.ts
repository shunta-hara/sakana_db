import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongController } from 'api/song/song.controller';
import { SongService } from 'api/song/song.service';
import { Song } from 'entities/song.entity';
import { Composer } from 'entities/composer.entity';
import { Lyricist } from 'entities/lyricist.entity';
import { ReleaseSong } from 'entities/releaseSong.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Song, Composer, Lyricist, ReleaseSong])],
  controllers: [SongController],
  providers: [SongService],
})
export class SongModule {}
