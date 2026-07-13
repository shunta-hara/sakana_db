import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Release } from './release.entity';
import { Song } from './song.entity';
import { BaseEntity } from 'entities/base.entity';

@Entity('mid_release_song')
export class ReleaseSong extends BaseEntity {
  @PrimaryColumn({ name: 'release_id' })
  releaseId: number;

  @PrimaryColumn({ name: 'song_id' })
  songId: number;

  @Column({ name: 'order', default: 1 })
  order: number;

  @ManyToOne(() => Release, (release) => release.releaseSongs)
  release: Release;

  @ManyToOne(() => Song, (song) => song.releaseSongs)
  song: Song;
}
