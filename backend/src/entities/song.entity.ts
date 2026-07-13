import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Composer } from './composer.entity';
import { Lyricist } from './lyricist.entity';
import { ReleaseSong } from './releaseSong.entity';
import { BaseEntity } from 'entities/base.entity';

@Entity('m_song')
export class Song extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'song_id' })
  songId: number;

  @Column({ name: 'song_title' })
  songTitle: string;

  @Column({ name: 'duration' })
  duration: string;

  @ManyToOne(() => Composer, (composer) => composer.songs)
  composer: Composer;

  @ManyToOne(() => Lyricist, (lyricist) => lyricist.songs)
  lyricist: Lyricist;

  @OneToMany(() => ReleaseSong, (rs) => rs.song)
  releaseSongs: ReleaseSong[];
}
