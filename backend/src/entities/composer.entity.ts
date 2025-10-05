import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Song } from './song.entity';

@Entity('m_composer')
export class Composer {
  @PrimaryGeneratedColumn({ name: 'composer_id' })
  composerId: number;

  @Column({ name: 'name' })
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Song, (song) => song.composer)
  songs: Song[];
}
