import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import {Row} from './Row';

@Entity()
export class Dot {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @ManyToOne(() => Row, rowId => rowId.dots)
    @JoinColumn()
    @Column('varchar', {length: 255,comment:'rowの外部キー'})
    rowId: Row;

    @Column({ type: "int",comment:"横方向の位置"})
    x:number;

    @Column({ type: "int",comment:"縦方向の位置"})
    y:number;

    @Column('varchar',{length:1,comment:"赤、1が点灯、0が消灯"})
    red:string;

    @Column('varchar',{length:1,comment:"緑、1が点灯、0が消灯"})
    green:string;

    @Column('varchar',{length:1,comment:"青、1が点灯、0が消灯"})
    blue:string;

    @CreateDateColumn({ comment: '作成日時' })
    createdAt: Date;

    @UpdateDateColumn({ comment: '更新日時' })
    updatedAt: Date;
}