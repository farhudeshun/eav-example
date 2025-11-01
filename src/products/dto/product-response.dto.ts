import { ApiProperty } from "@nestjs/swagger";

export class ProductResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: "Laptop" })
  name: string;

  @ApiProperty({
    example: { color: "gray", ram: "16GB" },
    type: "object",
    additionalProperties: { type: "string" },
  })
  attributes: Record<string, string>;
}
