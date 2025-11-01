import { Controller, Post, Body, Get, Param, Patch } from "@nestjs/common";
import { ProductService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { ProductResponseDto } from "./dto/product-response.dto";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from "@nestjs/swagger";

@ApiTags("products")
@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: "Create a new product with attributes" })
  @ApiBody({ type: CreateProductDto })
  @ApiResponse({
    status: 201,
    description: "Product created",
    type: ProductResponseDto,
  })
  async create(@Body() body: CreateProductDto) {
    const product = await this.productService.createProduct(
      body.name,
      body.attributes
    );

    return {
      id: product.id,
      name: product.name,
      attributes: product.attributes.map((attr) => ({
        id: attr.attribute.id,
        key: attr.attribute.key,
        value: attr.value,
      })),
    };
  }

  @Get()
  @ApiOperation({ summary: "Get all products" })
  @ApiResponse({
    status: 200,
    description: "List of products retrieved",
    type: [ProductResponseDto],
  })
  async findAll() {
    const products = await this.productService.getAllProducts();

    return products.map((product) => ({
      id: product.id,
      name: product.name,
      attributes: product.attributes.map((attr) => ({
        id: attr.attribute.id,
        key: attr.attribute.key,
        value: attr.value,
      })),
    }));
  }

  @Get(":id")
  @ApiOperation({ summary: "Get product by ID" })
  @ApiParam({ name: "id", description: "ID of the product" })
  @ApiResponse({
    status: 200,
    description: "Product retrieved",
    type: ProductResponseDto,
  })
  async findOne(@Param("id") id: number) {
    const product = await this.productService.getProduct(id);

    return {
      id: product.id,
      name: product.name,
      attributes: product.attributes.map((attr) => ({
        id: attr.attribute.id,
        key: attr.attribute.key,
        value: attr.value,
      })),
    };
  }
}
