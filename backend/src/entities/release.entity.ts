import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ReleaseSong } from './releaseSong.entity';

@Entity('m_release')
export class Release {
  @PrimaryGeneratedColumn({ name: 'release_id' })
  releaseId: number;

  @Column({ name: 'release_title' })
  releaseTitle: string;

  @Column({ name: 'release_date', type: 'date', nullable: true })
  releaseDate: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => ReleaseSong, (rs) => rs.release)
  releaseSongs: ReleaseSong[];
}
