import { EntityRepository, Repository } from 'typeorm';
import { Lyricist } from '../entities/lyricist.entity';

@EntityRepository(Lyricist)
export class LyricistRepository extends Repository<Lyricist> {}
