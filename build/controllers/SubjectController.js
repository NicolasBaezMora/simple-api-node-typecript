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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectController = void 0;
const SubjectModel_1 = require("./../models/SubjectModel");
const express_1 = require("express");
class SubjectController {
    getAllSubjects(req = express_1.request, res = express_1.response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subjects = yield SubjectModel_1.SubjectModel.findAll();
                return res.json(subjects);
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ message: "Something went wrong" });
            }
        });
    }
    createSubject(req = express_1.request, res = express_1.response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const newSubject = yield SubjectModel_1.SubjectModel.create({ name });
                return res.json({ subject: newSubject, message: "Subject added" });
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ message: "Something went wrong" });
            }
        });
    }
}
exports.SubjectController = SubjectController;
