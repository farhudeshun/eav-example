import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { ProductAttribute } from "./entities/product-attribute";
import { ProductService } from "./products.service";
import { ProductController } from "./products.controller";
import { Attribute } from "../attribute/entity/attribute.entity";
import { AttributesModule } from "src/attribute/attribute.module";
import { AttributeService } from "src/attribute/attribute.service";
import { AttributeController } from "src/attribute/attribute.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      ProductAttribute,
      Attribute,
      AttributesModule,
    ]),
  ],
  providers: [ProductService, AttributeService],
  controllers: [ProductController, AttributeController],
})
export class ProductsModule {}
