import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { ReleaseSong } from 'entities/releaseSong.entity';
import { BaseEntity } from 'entities/base.entity';

@Entity('m_release')
export class Release extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'release_id' })
  releaseId: number;

  @Column({ name: 'release_title' })
  releaseTitle: string;

  @Column({ name: 'release_date', type: 'date', nullable: true })
  releaseDate: string;

  @OneToMany(() => ReleaseSong, (rs) => rs.release)
  releaseSongs: ReleaseSong[];
}
