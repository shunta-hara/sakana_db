import { Module } from '@nestjs/common';
import { SongModule } from './api/song/song.module';
import { ReleaseModule } from './api/release/release.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, SongModule, ReleaseModule],
})
export class AppModule {}
