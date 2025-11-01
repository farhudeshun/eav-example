import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Product } from "./product.entity";
import { Attribute } from "../../attribute/entity/attribute.entity";

@Entity()
export class ProductAttribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @ManyToOne(() => Product, (product) => product.attributes, {
    onDelete: "CASCADE",
  })
  product: Product;

  @ManyToOne(() => Attribute, (attribute) => attribute.productAttributes, {
    eager: true,
  })
  attribute: Attribute;
}
