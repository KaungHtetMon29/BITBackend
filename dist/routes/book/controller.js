"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getbook = exports.deletebook = exports.addbook = exports.updatebook = exports.findonebook = void 0;
var data_source_1 = __importDefault(require("../../db/data-source"));
var tbl_book_1 = __importDefault(require("../../entity/tbl_book"));
var content_owner_1 = __importDefault(require("../../entity/content_owner"));
var publisher_1 = __importDefault(require("../../entity/publisher"));
var bookrepo = data_source_1.default.getRepository(tbl_book_1.default);
var corepo = data_source_1.default.getRepository(content_owner_1.default);
var prepo = data_source_1.default.getRepository(publisher_1.default);
function findonebook(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var datab, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(req.params.bid);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, bookrepo
                            .createQueryBuilder("book")
                            .innerJoinAndSelect("book.content_owner", "content_owner")
                            .innerJoinAndSelect("book.publisher", "publisher")
                            .select([
                            "book.idx",
                            "book.book_uniq_idx",
                            "book.bookname",
                            "book.prize",
                            "content_owner.name",
                            "publisher.name",
                            "book.cover_photo",
                        ])
                            .where("book.book_uniq_idx = '".concat(req.params.bid, "'"))
                            .getOne()];
                case 2:
                    datab = _a.sent();
                    return [2 /*return*/, res.status(200).json(datab)];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.findonebook = findonebook;
function updatebook(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var date, bdy, cownerid, pid, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    date = new Date();
                    console.log(date);
                    bdy = req.body;
                    console.log(bdy);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, corepo.findOne({
                            where: { name: bdy.contentowner },
                        })];
                case 2:
                    cownerid = _a.sent();
                    return [4 /*yield*/, prepo.findOne({
                            where: { name: bdy.publisher },
                        })];
                case 3:
                    pid = _a.sent();
                    return [4 /*yield*/, bookrepo.update({ book_uniq_idx: bdy.bprevid }, {
                            book_uniq_idx: bdy.bookuniqid,
                            co_id: cownerid.idx,
                            bookname: bdy.bookname,
                            publisher_id: pid.idx,
                            prize: bdy.prize,
                            cover_photo: bdy.coverphoto,
                            created_timetick: date,
                        })];
                case 4:
                    _a.sent();
                    return [2 /*return*/, res.status(200).json("success")];
                case 5:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.updatebook = updatebook;
function addbook(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var date, bdy, cownerid, pid, addbook_1, error_3, statuscode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    date = new Date();
                    console.log(date);
                    bdy = req.body;
                    console.log(bdy.publisher);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, corepo.findOne({
                            where: { name: bdy.contentowner },
                        })];
                case 2:
                    cownerid = _a.sent();
                    return [4 /*yield*/, prepo.findOne({
                            where: { name: bdy.publisher },
                        })];
                case 3:
                    pid = _a.sent();
                    if (cownerid === null) {
                        throw new Error("No owner Found");
                    }
                    if (pid === null) {
                        throw new Error("No Publisher Found");
                    }
                    addbook_1 = bookrepo.create({
                        book_uniq_idx: bdy.bookuniqid,
                        co_id: cownerid.idx,
                        bookname: bdy.bookname,
                        publisher_id: pid.idx,
                        prize: bdy.prize,
                        cover_photo: bdy.coverphoto,
                        created_timetick: date,
                    });
                    return [4 /*yield*/, bookrepo.insert(addbook_1)];
                case 4:
                    _a.sent();
                    return [2 /*return*/, res.status(200).json("success")];
                case 5:
                    error_3 = _a.sent();
                    statuscode = 500;
                    if (error_3.message === "No owner Found" ||
                        error_3.message === "No Publisher Found") {
                        statuscode = 404;
                    }
                    console.error("Error adding book:", error_3);
                    return [2 /*return*/, res.status(statuscode).json({ error: error_3.message })];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.addbook = addbook;
function deletebook(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_4, statuscode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(req.params.id);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, bookrepo.findOne({
                            where: { idx: req.params.id },
                        })];
                case 2:
                    data = _a.sent();
                    if (data === null) {
                        throw new Error("No Book Found");
                    }
                    console.log(data);
                    return [4 /*yield*/, bookrepo.remove(data)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, res.status(200).json("success")];
                case 4:
                    error_4 = _a.sent();
                    statuscode = 500;
                    if (error_4.message === "No Book Found") {
                        statuscode = 404;
                    }
                    return [2 /*return*/, res.status(statuscode).json({ error: error_4.message })];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.deletebook = deletebook;
function getbook(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, test, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, bookrepo.find()];
                case 1:
                    data = _a.sent();
                    return [4 /*yield*/, bookrepo
                            .createQueryBuilder("book")
                            .innerJoinAndSelect("book.content_owner", "content_owner")
                            .innerJoinAndSelect("book.publisher", "publisher")
                            .select([
                            "book.idx",
                            "book.created_timetick",
                            "book.book_uniq_idx",
                            "book.bookname",
                            "content_owner.name",
                            "publisher.name",
                            "book.cover_photo",
                        ])
                            .getMany()];
                case 2:
                    test = _a.sent();
                    return [2 /*return*/, res.json(test)];
                case 3:
                    error_5 = _a.sent();
                    console.error("Error adding book:", error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getbook = getbook;
//# sourceMappingURL=controller.js.map