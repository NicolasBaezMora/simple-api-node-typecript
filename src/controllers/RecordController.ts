import { StudentModel } from './../models/StudentModel';
import { request, response } from "express";
import { RecordModel } from "../models/RecordModel";
import { SubjectModel } from '../models/SubjectModel';
import { Record } from '../structure_models/Record';


export class RecordController {


    public async getAllRecords(req = request, res = response) {
        try {
            const records: Record[] = await RecordModel.findAll();
            return res.json(records);
        } catch(err) {
            console.log(err);
            return res.status(500).json({ message: "Something went wrong" });
        }
    }

    public async createRecord(req = request, res = response) {
        try {
            const {idStudent, idSubject} = req.body;
            if(!(await StudentModel.findByPk(idStudent))) return res.status(404).json({message: `Student with id ${idStudent} not found`});
            if(!(await SubjectModel.findByPk(idSubject))) return res.status(404).json({message: `Subject with id ${idSubject} not found`});
            const record: Record = await RecordModel.create({fk_student: idStudent, fk_subject: idSubject});
            return res.json({record, message: "Record added"});
        } catch(err) {
            console.log(err);
            return res.status(500).json({ message: "Something went wrong" });
        }
    }

}










