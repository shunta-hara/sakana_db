import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetListDto } from 'api/common/dto/getList.dto';
import { Release } from 'entities/release.entity';
import { ReleaseRepository } from 'repositories/release.repository';

@Injectable()
export class ReleaseService {
  constructor(
    @InjectRepository(Release)
    private readonly releaseRepository: ReleaseRepository,
  ) {}
  getRelease(id: string) {
    return this.releaseRepository.findOne({ where: { releaseId: Number(id) } });
  }

  getReleaseList(body: GetListDto) {
    return this.releaseRepository.find({
      skip: body.offset,
      take: body.limit,
      order: { releaseId: 'ASC' },
    });
  }
}
