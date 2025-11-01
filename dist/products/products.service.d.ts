import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { ProductAttribute } from "./entities/product-attribute";
import { AttributeService } from "../attribute/attribute.service";
export declare class ProductService {
    private productRepo;
    private productAttrRepo;
    private readonly attrService;
    constructor(productRepo: Repository<Product>, productAttrRepo: Repository<ProductAttribute>, attrService: AttributeService);
    createProduct(name: string, attributes: Record<string, string>): Promise<Product>;
    getProduct(id: number): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
}
