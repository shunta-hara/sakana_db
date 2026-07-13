import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetListDto } from 'api/common/dto/getList.dto';
import { Release } from 'entities/release.entity';
import { ReleaseSong } from 'entities/releaseSong.entity';
import { Song } from 'entities/song.entity';
import { ReleaseRepository } from 'repositories/release.repository';
import { ReleaseSongRepository } from 'repositories/releaseSong.repository';
import { SongRepository } from 'repositories/song.repository';
import { GetReleaseResponseDto } from 'api/release/dto/getReleaseResponse.dto';


@Injectable()
export class ReleaseService {
  constructor(
    @InjectRepository(Release)
    private readonly releaseRepository: ReleaseRepository,
    @InjectRepository(Song)
    private readonly songRepository: SongRepository,
    @InjectRepository(ReleaseSong)
    private readonly releaseSongRepository: ReleaseSongRepository,
  ) {}
  getRelease(id: string): GetReleaseResponseDto {
    const release = this.releaseRepository.findOne({ where: { releaseId: Number(id) } });
    if (!release) {
      return new GetReleaseResponseDto();
    }
  }

  getReleaseList(body: GetListDto) {
    return this.releaseRepository.find({
      skip: body.offset,
      take: body.limit,
      order: { releaseId: 'ASC' },
    });
  }
}
