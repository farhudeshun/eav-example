import { ProductService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(body: CreateProductDto): Promise<{
        id: number;
        name: string;
        attributes: {
            id: number;
            key: string;
            value: string;
        }[];
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        attributes: {
            id: number;
            key: string;
            value: string;
        }[];
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        attributes: {
            id: number;
            key: string;
            value: string;
        }[];
    }>;
}
