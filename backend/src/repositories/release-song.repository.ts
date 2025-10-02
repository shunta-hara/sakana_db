import { EntityRepository, Repository } from 'typeorm';
import { ReleaseSong } from '../entities/release-song.entity';

@EntityRepository(ReleaseSong)
export class ReleaseSongRepository extends Repository<ReleaseSong> {}
