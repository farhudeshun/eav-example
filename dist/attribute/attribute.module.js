"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const attribute_entity_1 = require("./entity/attribute.entity");
const attribute_service_1 = require("./attribute.service");
const attribute_controller_1 = require("./attribute.controller");
let AttributesModule = class AttributesModule {
};
exports.AttributesModule = AttributesModule;
exports.AttributesModule = AttributesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([attribute_entity_1.Attribute])],
        providers: [attribute_service_1.AttributeService],
        controllers: [attribute_controller_1.AttributeController],
        exports: [attribute_service_1.AttributeService],
    })
], AttributesModule);
//# sourceMappingURL=attribute.module.js.map