import { EntityRepository, Repository } from 'typeorm';
import { Release } from '../entities/release.entity';

@EntityRepository(Release)
export class ReleaseRepository extends Repository<Release> {}
