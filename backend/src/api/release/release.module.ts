import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReleaseController } from 'api/release/release.controller';
import { ReleaseService } from 'api/release/release.service';
import { Release } from 'entities/release.entity';
import { ReleaseSong } from 'entities/releaseSong.entity';
import { Song } from 'entities/song.entity';
import { Composer } from 'entities/composer.entity';
import { Lyricist } from 'entities/lyricist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Release, ReleaseSong, Song, Composer, Lyricist])],
  controllers: [ReleaseController],
  providers: [ReleaseService],
})
export class ReleaseModule {}
