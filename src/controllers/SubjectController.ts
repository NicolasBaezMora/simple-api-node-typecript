import { SubjectModel } from './../models/SubjectModel';
import { request, response } from "express";
import { Subject } from '../structure_models/Subject';


export class SubjectController {


    public async getAllSubjects(req = request, res = response) {
        try {
            const subjects: Subject[] = await SubjectModel.findAll();
            return res.json(subjects);
        } catch(err) {
            console.log(err);
            return res.status(500).json({ message: "Something went wrong" });
        }
    }


    public async createSubject(req = request, res = response) {
        try {
            const {name} = req.body;
            const newSubject: Subject = await SubjectModel.create({name});
            return res.json({subject: newSubject, message: "Subject added"});
        } catch(err) {
            console.log(err);
            return res.status(500).json({ message: "Something went wrong" });
        }
    }


}






