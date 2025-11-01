import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Attribute } from "./entity/attribute.entity";
import { AttributeService } from "./attribute.service";
import { AttributeController } from "./attribute.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Attribute])],
  providers: [AttributeService],
  controllers: [AttributeController],
  exports: [AttributeService],
})
export class AttributesModule {}
