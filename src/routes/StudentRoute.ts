import { StudentController } from './../controllers/StudentController';
import { Router } from "express";


const studentRouter = Router();
const studentController = new StudentController();

studentRouter.get("/", studentController.getAllStudents);

studentRouter.get("/:id", studentController.getStudentById);

studentRouter.post("/", studentController.createStudent);

studentRouter.put("/", studentController.updateStudent);


export {studentRouter};