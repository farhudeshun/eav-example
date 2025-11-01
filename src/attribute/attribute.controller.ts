import { Controller, Post, Body, Get } from "@nestjs/common";
import { AttributeService } from "./attribute.service";
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from "@nestjs/swagger";

@ApiTags("attributes")
@Controller("attributes")
export class AttributeController {
  constructor(private readonly attrService: AttributeService) {}

  @Post()
  @ApiOperation({ summary: "Create a new attribute" })
  @ApiBody({ schema: { example: { key: "weight" } } })
  @ApiResponse({ status: 201, description: "Attribute created" })
  async create(@Body("key") key: string) {
    return this.attrService.createAttribute(key);
  }

  @Get()
  @ApiOperation({ summary: "Get all attributes" })
  @ApiResponse({ status: 200, description: "List of attributes retrieved" })
  async findAll() {
    return this.attrService.getAllAttributes();
  }
}
