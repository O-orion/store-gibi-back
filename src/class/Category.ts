import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Comic } from './Comic';

@Entity()
export class Category {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ unique: true })
    name!: string;

    @Column({ nullable:  true })
    description?: string;

    @ManyToMany(() => Comic, (comic) => comic.categories)
    comics!: Comic[];

}
