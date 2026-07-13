import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Song } from './song.entity';
import { BaseEntity } from 'entities/base.entity';

@Entity('m_lyricist')
export class Lyricist extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'lyricist_id' })
  lyricistId: number;

  @Column({ name: 'name' })
  name: string;

  @OneToMany(() => Song, (song) => song.lyricist)
  songs: Song[];
}
