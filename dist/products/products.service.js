"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
const product_attribute_1 = require("./entities/product-attribute");
const attribute_service_1 = require("../attribute/attribute.service");
let ProductService = class ProductService {
    constructor(productRepo, productAttrRepo, attrService) {
        this.productRepo = productRepo;
        this.productAttrRepo = productAttrRepo;
        this.attrService = attrService;
    }
    async createProduct(name, attributes) {
        const product = this.productRepo.create({ name });
        await this.productRepo.save(product);
        const productAttributes = [];
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
    async getProduct(id) {
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
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(product_attribute_1.ProductAttribute)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        attribute_service_1.AttributeService])
], ProductService);
//# sourceMappingURL=products.service.js.map