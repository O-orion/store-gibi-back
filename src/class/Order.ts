import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./Customer";
import { Comic } from "./Comic";

@Entity()
export class Order {

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    orderDate!: Date;

    @Column('decimal')
    total!: number;

    @Column({ default: "pending" })
    status!: string;

    @ManyToOne(() => Customer, (customer) => customer.orders)
    customer!: Customer;

    @ManyToMany(() => Comic, (comic) => comic.orders )
    @JoinTable({
        name: 'order_comics',
        joinColumn: { name: 'orderId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'comicId', referencedColumnName: 'id' }
    })
    comics!: Comic[]

    @Column("json", { nullable: true })
    quantities!: { comicId: string; quantity: number }[]

}
