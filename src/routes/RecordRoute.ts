import { RecordController } from './../controllers/RecordController';
import { Router } from "express";


const recordRoute = Router();
const recordController = new RecordController();


recordRoute.get("/", recordController.getAllRecords);
recordRoute.post("/", recordController.createRecord);


export {recordRoute};






