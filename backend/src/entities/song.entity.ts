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

@Entity('m_song')
export class Song {
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

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => ReleaseSong, (rs) => rs.song)
  releaseSongs: ReleaseSong[];
}
