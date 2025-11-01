import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ProductAttribute } from "./product-attribute";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => ProductAttribute, (attr) => attr.product, { cascade: true })
  attributes: ProductAttribute[];
}
