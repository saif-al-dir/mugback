import { OrdersService } from './orders.service';
import { Order } from './order.entity';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(orderData: Partial<Order>): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
}
