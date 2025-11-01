import { Product } from "./product.entity";
import { Attribute } from "../../attribute/entity/attribute.entity";
export declare class ProductAttribute {
    id: number;
    value: string;
    product: Product;
    attribute: Attribute;
}
