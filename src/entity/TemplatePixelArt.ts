import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class TemplatePixelArt {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 20, comment: 'ドット絵の名前' })
  name: string;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;
}
