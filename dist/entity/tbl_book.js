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
var content_owner_1 = __importDefault(require("./content_owner"));
var publisher_1 = __importDefault(require("./publisher"));
var tbl_book = /** @class */ (function () {
    function tbl_book() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "idx", unsigned: true }),
        __metadata("design:type", Number)
    ], tbl_book.prototype, "idx", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false, unique: true, type: "varchar", length: 255 }),
        __metadata("design:type", String)
    ], tbl_book.prototype, "book_uniq_idx", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false, type: "varchar", length: 255 }),
        __metadata("design:type", String)
    ], tbl_book.prototype, "bookname", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false, type: "int" }),
        __metadata("design:type", Number)
    ], tbl_book.prototype, "co_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return content_owner_1.default; }, function (contentOwner) { return contentOwner.books; }),
        (0, typeorm_1.JoinColumn)({ name: "co_id" }),
        __metadata("design:type", content_owner_1.default)
    ], tbl_book.prototype, "content_owner", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false, type: "int" }),
        __metadata("design:type", Number)
    ], tbl_book.prototype, "publisher_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return publisher_1.default; }, function (publisher) { return publisher.books; }),
        (0, typeorm_1.JoinColumn)({ name: "publisher_id" }),
        __metadata("design:type", publisher_1.default)
    ], tbl_book.prototype, "publisher", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false, type: "text" }),
        __metadata("design:type", String)
    ], tbl_book.prototype, "cover_photo", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false, type: "int" }),
        __metadata("design:type", Number)
    ], tbl_book.prototype, "prize", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "date" }),
        __metadata("design:type", Date)
    ], tbl_book.prototype, "created_timetick", void 0);
    tbl_book = __decorate([
        (0, typeorm_1.Entity)({ name: "tbl_book" })
    ], tbl_book);
    return tbl_book;
}());
exports.default = tbl_book;
//# sourceMappingURL=tbl_book.js.map