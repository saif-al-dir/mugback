import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private service;
    constructor(service: ProductsService);
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    create(dto: CreateProductDto): Promise<Product>;
    update(id: number, dto: UpdateProductDto): Promise<Product>;
    remove(id: number): Promise<void>;
}
