import { DataSource } from "typeorm";
import { Category } from "./class/Category";
import { Comic } from "./class/Comic";
import { Customer } from "./class/Customer";
import { Order } from "./class/Order";

import "dotenv/config";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [Category, Comic, Customer, Order],
    migrations: [],
    subscribers: []
})
