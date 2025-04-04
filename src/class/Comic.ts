import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
import { Order } from "./Order";


@Entity()
export class Comic {

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    title!: string;

    @Column()
    author!: string;

    @Column()
    price!: number;

    @Column({ default: 0 })
    stock!: number;

    @Column({ nullable: true })
    coverImage!: string;

    @ManyToMany(() =>  Category, (category) => category.comics)
    @JoinTable()
    categories!: Category[];

    @ManyToMany(() => Order, (order) => order.comics )
    orders!: Order[];
}
