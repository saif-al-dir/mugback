import { OrderItem } from './order-item.entity';
export declare class Order {
    id: number;
    customer: {
        name: string;
        email: string;
        phone: string;
        address: string;
    };
    items: OrderItem[];
    totalPrice: number;
    createdAt: Date;
}
