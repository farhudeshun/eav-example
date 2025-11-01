import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { ProductAttribute } from "./entities/product-attribute";
import { AttributeService } from "../attribute/attribute.service";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
    @InjectRepository(ProductAttribute)
    private productAttrRepo: Repository<ProductAttribute>,
    private readonly attrService: AttributeService
  ) {}

  async createProduct(name: string, attributes: Record<string, string>) {
    const product = this.productRepo.create({ name });
    await this.productRepo.save(product);

    const productAttributes: ProductAttribute[] = [];

    for (const [key, value] of Object.entries(attributes)) {
      const attribute = await this.attrService.createAttribute(key);

      const productAttr = this.productAttrRepo.create({
        product,
        attribute,
        value,
      });

      productAttributes.push(productAttr);
    }

    await this.productAttrRepo.save(productAttributes);

    return this.productRepo.findOne({
      where: { id: product.id },
      relations: ["attributes", "attributes.attribute"],
    });
  }

  async getProduct(id: number) {
    return this.productRepo.findOne({
      where: { id },
      relations: ["attributes", "attributes.attribute"],
    });
  }

  async getAllProducts() {
    return this.productRepo.find({
      relations: ["attributes", "attributes.attribute"],
      order: {
        id: "ASC",
        attributes: { id: "ASC" },
      },
    });
  }
}
