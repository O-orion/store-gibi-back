import { Col } from "sequelize/types/utils";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order";
import * as bcrypt from 'bcrypt';

@Entity()
export class Customer {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ nullable: false })
    name!: string;

    @Column({ unique:  true, nullable: false })
    email!: string;

    @Column({ nullable: false })
    password!: string;

    @Column({ nullable: false })
    phone!: string;

    @Column({ nullable: false })
    addres!: string;

    @OneToMany(() => Order, (order) => order.customer)
    orders!: Order[];

    @BeforeInsert()
    async hashPassowrd() {
        this.password = await bcrypt.hash(this.password, 10)
    }

    async checkPassword(password: string):Promise<boolean> {
        return await bcrypt.compare(password, this.password);
    }

}
