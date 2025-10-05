import { EntityRepository, Repository } from 'typeorm';
import { ReleaseSong } from '../entities/releaseSong.entity';

@EntityRepository(ReleaseSong)
export class ReleaseSongRepository extends Repository<ReleaseSong> {}
