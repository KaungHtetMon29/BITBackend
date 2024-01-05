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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var tbl_book_1 = __importDefault(require("./tbl_book"));
var content_owner = /** @class */ (function () {
    function content_owner() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], content_owner.prototype, "idx", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false, type: "varchar", length: 255 }),
        __metadata("design:type", String)
    ], content_owner.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return tbl_book_1.default; }, function (book) { return book.content_owner; }),
        __metadata("design:type", Array)
    ], content_owner.prototype, "books", void 0);
    content_owner = __decorate([
        (0, typeorm_1.Entity)({ name: "content_owner" })
    ], content_owner);
    return content_owner;
}());
exports.default = content_owner;
//# sourceMappingURL=content_owner.js.map