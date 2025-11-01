import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
  @ApiProperty({ example: "Laptop", description: "Name of the product" })
  name: string;

  @ApiProperty({
    example: { color: "gray", ram: "16GB" },
    description: "Dynamic attributes of the product",
    type: "object",
    additionalProperties: { type: "string" },
  })
  attributes?: Record<string, string>;
}
