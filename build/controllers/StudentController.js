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
exports.StudentController = void 0;
const StudentModel_1 = require("./../models/StudentModel");
const express_1 = require("express");
class StudentController {
    getAllStudents(req = express_1.request, res = express_1.response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const students = yield StudentModel_1.StudentModel.findAll();
                return res.json(students);
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ message: "Something went wrong" });
            }
        });
    }
    getStudentById(req = express_1.request, res = express_1.response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (!id)
                return res.status(404).json({ message: "Id is required" });
            if (typeof id != "string")
                return res.status(400).json({ message: "Malformed id" });
            try {
                const student = yield StudentModel_1.StudentModel.findByPk(id);
                if (!student)
                    return res.status(404).json({ message: `Student with id ${id} not found` });
                return res.json(student);
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ message: "Something went wrong" });
            }
        });
    }
    createStudent(req = express_1.request, res = express_1.response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, age } = req.body;
                const newStudent = yield StudentModel_1.StudentModel.create({ name, email, age });
                return res.json({ student: newStudent, message: "Student added" });
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ message: "Something went wrong" });
            }
        });
    }
    updateStudent(req = express_1.request, res = express_1.response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, name, email, age } = req.body;
                const studentFound = yield StudentModel_1.StudentModel.findByPk(id);
                if (!studentFound)
                    return res.status(404).json({ message: `Student with id ${id} not found` });
                const studentUpdated = yield studentFound.update({ name, email, age });
                return res.json(studentUpdated);
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ message: "Something went wrong" });
            }
        });
    }
}
exports.StudentController = StudentController;
