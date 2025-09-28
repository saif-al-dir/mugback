import { Order } from './order.entity';
export declare class OrderItem {
    id: number;
    productId: number;
    quantity: number;
    description: string;
    order: Order;
    price: number;
}
