import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ProductAttribute } from "../../products/entities/product-attribute";

@Entity()
export class Attribute {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  key: string;

  @OneToMany(() => ProductAttribute, (attr) => attr.attribute)
  productAttributes: ProductAttribute[];
}
