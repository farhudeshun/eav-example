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
exports.AttributeController = void 0;
const common_1 = require("@nestjs/common");
const attribute_service_1 = require("./attribute.service");
const swagger_1 = require("@nestjs/swagger");
let AttributeController = class AttributeController {
    constructor(attrService) {
        this.attrService = attrService;
    }
    async create(key) {
        return this.attrService.createAttribute(key);
    }
    async findAll() {
        return this.attrService.getAllAttributes();
    }
};
exports.AttributeController = AttributeController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Create a new attribute" }),
    (0, swagger_1.ApiBody)({ schema: { example: { key: "weight" } } }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Attribute created" }),
    __param(0, (0, common_1.Body)("key")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AttributeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Get all attributes" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "List of attributes retrieved" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AttributeController.prototype, "findAll", null);
exports.AttributeController = AttributeController = __decorate([
    (0, swagger_1.ApiTags)("attributes"),
    (0, common_1.Controller)("attributes"),
    __metadata("design:paramtypes", [attribute_service_1.AttributeService])
], AttributeController);
//# sourceMappingURL=attribute.controller.js.map