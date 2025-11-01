import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Attribute } from "./entity/attribute.entity";

@Injectable()
export class AttributeService {
  constructor(
    @InjectRepository(Attribute)
    private attrRepo: Repository<Attribute>
  ) {}

  async createAttribute(key: string): Promise<Attribute> {
    let attribute = await this.attrRepo.findOne({ where: { key } });
    if (!attribute) {
      attribute = this.attrRepo.create({ key });
      await this.attrRepo.save(attribute);
    }
    return attribute;
  }

  async getAllAttributes(): Promise<Attribute[]> {
    return this.attrRepo.find({ order: { id: "ASC" } });
  }
}
