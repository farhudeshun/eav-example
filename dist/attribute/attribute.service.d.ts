import { Repository } from "typeorm";
import { Attribute } from "./entity/attribute.entity";
export declare class AttributeService {
    private attrRepo;
    constructor(attrRepo: Repository<Attribute>);
    createAttribute(key: string): Promise<Attribute>;
    getAllAttributes(): Promise<Attribute[]>;
}
