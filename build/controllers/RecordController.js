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
exports.RecordController = void 0;
const StudentModel_1 = require("./../models/StudentModel");
const express_1 = require("express");
const RecordModel_1 = require("../models/RecordModel");
const SubjectModel_1 = require("../models/SubjectModel");
class RecordController {
    getAllRecords(req = express_1.request, res = express_1.response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const records = yield RecordModel_1.RecordModel.findAll();
                return res.json(records);
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ message: "Something went wrong" });
            }
        });
    }
    createRecord(req = express_1.request, res = express_1.response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { idStudent, idSubject } = req.body;
                if (!(yield StudentModel_1.StudentModel.findByPk(idStudent)))
                    return res.status(404).json({ message: `Student with id ${idStudent} not found` });
                if (!(yield SubjectModel_1.SubjectModel.findByPk(idSubject)))
                    return res.status(404).json({ message: `Subject with id ${idSubject} not found` });
                const record = yield RecordModel_1.RecordModel.create({ fk_student: idStudent, fk_subject: idSubject });
                return res.json({ record, message: "Record added" });
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ message: "Something went wrong" });
            }
        });
    }
}
exports.RecordController = RecordController;
