import { Repository } from 'typeorm';
import { Order } from './order.entity';
export declare class OrdersService {
    private ordersRepository;
    constructor(ordersRepository: Repository<Order>);
    create(orderData: Partial<Order>): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
}
