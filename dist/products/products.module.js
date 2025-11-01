"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./entities/product.entity");
const product_attribute_1 = require("./entities/product-attribute");
const products_service_1 = require("./products.service");
const products_controller_1 = require("./products.controller");
const attribute_entity_1 = require("../attribute/entity/attribute.entity");
const attribute_module_1 = require("../attribute/attribute.module");
const attribute_service_1 = require("../attribute/attribute.service");
const attribute_controller_1 = require("../attribute/attribute.controller");
let ProductsModule = class ProductsModule {
};
exports.ProductsModule = ProductsModule;
exports.ProductsModule = ProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                product_entity_1.Product,
                product_attribute_1.ProductAttribute,
                attribute_entity_1.Attribute,
                attribute_module_1.AttributesModule,
            ]),
        ],
        providers: [products_service_1.ProductService, attribute_service_1.AttributeService],
        controllers: [products_controller_1.ProductController, attribute_controller_1.AttributeController],
    })
], ProductsModule);
//# sourceMappingURL=products.module.js.map