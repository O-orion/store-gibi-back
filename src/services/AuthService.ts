import { Customer } from "../class/Customer";
import { AppDataSource } from "../dataSource";
import * as jwt from 'jsonwebtoken';

import "dotenv/config"


export class AuthService {

    private customerRepository = AppDataSource.getRepository(Customer);
    private readonly secret = process.env.SECRET_KEY;

    async login(email: string, password: string): Promise<string | null> {

        const customer = await this.customerRepository.findOneBy({ email });

        if (!customer || !(await customer.checkPassword(password))) {
            return null;
        }

        const token = jwt.sign({ id: customer.id, email: customer.email }, this.secret as string, { expiresIn: '1h' });
        return token;
    }

    async verifyToken(token: string): Promise<Customer | null> {
        try {
            const decoded = jwt.verify(token, this.secret as string) as { id: string, email: string };
            const customer = await this.customerRepository.findOneBy({ id: decoded.id });
            return customer || null;
        } catch (error) {
            console.log('error: ', error);
            return null;
        }
    }

}
