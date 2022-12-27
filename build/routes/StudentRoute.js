"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouter = void 0;
const StudentController_1 = require("./../controllers/StudentController");
const express_1 = require("express");
const studentRouter = (0, express_1.Router)();
exports.studentRouter = studentRouter;
const studentController = new StudentController_1.StudentController();
studentRouter.get("/", studentController.getAllStudents);
studentRouter.get("/:id", studentController.getStudentById);
studentRouter.post("/", studentController.createStudent);
studentRouter.put("/", studentController.updateStudent);
