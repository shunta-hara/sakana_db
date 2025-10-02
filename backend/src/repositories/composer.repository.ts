import { EntityRepository, Repository } from 'typeorm';
import { Composer } from '../entities/composer.entity';

@EntityRepository(Composer)
export class ComposerRepository extends Repository<Composer> {}
