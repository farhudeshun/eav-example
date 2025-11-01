import { AttributeService } from "./attribute.service";
export declare class AttributeController {
    private readonly attrService;
    constructor(attrService: AttributeService);
    create(key: string): Promise<import("./entity/attribute.entity").Attribute>;
    findAll(): Promise<import("./entity/attribute.entity").Attribute[]>;
}
