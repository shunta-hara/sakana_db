import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Song } from './song.entity';

@Entity('m_lyricist')
export class Lyricist {
  @PrimaryGeneratedColumn({ name: 'lyricist_id' })
  lyricistId: number;

  @Column({ name: 'name' })
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Song, song => song.lyricist)
  songs: Song[];
}
