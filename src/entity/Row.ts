import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import {TemplatePixelArt} from './TemplatePixelArt';
import {Dot} from './Dot';

@Entity()
export class Row {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @ManyToOne(() => TemplatePixelArt, templatePixelArtId => templatePixelArtId.rows)
    @JoinColumn()
    @Column('varchar', {length: 255,comment:'templatePixelArtの外部キー',unique:true})
    templatePixelArtId: TemplatePixelArt;

    @OneToMany(() => Dot, dot => dot.rowId)
    dots:Dot[];

    @CreateDateColumn({ comment: '作成日時' })
    createdAt: Date;

    @UpdateDateColumn({ comment: '更新日時' })
    updatedAt: Date;
}