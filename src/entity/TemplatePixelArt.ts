import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from 'typeorm';
import {Row} from './Row';

@Entity()
export class TemplatePixelArt {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar', { length: 20, comment: 'ドット絵の名前', unique: true })
  name: string;

  @Column('varchar', { length: 1024, comment: 'ドット絵の点灯例画像' })
  exampleImage: string;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @OneToMany(() => Row, row => row.templatePixelArtId)
  rows:Row[];
}
