import { SubjectController } from './../controllers/SubjectController';
import { Router } from "express";


const subjectRouter = Router();
const subjectController = new SubjectController();


subjectRouter.get("/", subjectController.getAllSubjects);

subjectRouter.post("/", subjectController.createSubject);


export {subjectRouter}






