import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetListDto } from 'api/common/dto/getList.dto';
import { Song } from 'entities/song.entity';
import { SongRepository } from 'repositories/song.repository';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song)
    private readonly songRepository: SongRepository,
  ) {}

  async getSong(id: string): Promise<Song | undefined> {
    // m_songテーブルからid一致レコードを取得
    return this.songRepository.findOne({ where: { songId: Number(id) } });
  }

  async getSongList(body: GetListDto): Promise<Song[]> {
    return this.songRepository.find({
      skip: body.offset,
      take: body.limit,
      order: { songId: 'ASC' },
    });
  }
}
