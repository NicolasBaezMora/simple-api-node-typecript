import { Student } from './../structure_models/Student';
import { StudentModel } from './../models/StudentModel';
import { request, response } from "express";

export class StudentController {


    public async getAllStudents(req = request, res = response) {
        try {
            const students: Student[] = await StudentModel.findAll();
            return res.json(students);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Something went wrong" });
        }
    }


    public async getStudentById(req = request, res = response) {
        const { id } = req.params;
        if (!id) return res.status(404).json({ message: "Id is required" });
        if (typeof id != "string") return res.status(400).json({ message: "Malformed id" });
        try {
            const student: Student | null = await StudentModel.findByPk(id);
            if (!student) return res.status(404).json({ message: `Student with id ${id} not found` });
            return res.json(student);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Something went wrong" });
        }
    }



    public async createStudent(req = request, res = response) {
        try {
            const { name, email, age } = req.body;
            const newStudent: Student = await StudentModel.create({ name, email, age });
            return res.json({ student: newStudent, message: "Student added" });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Something went wrong" });
        }
    }

    public async updateStudent(req = request, res = response) {
        try {
            const { id, name, email, age } = req.body;
            const studentFound = await StudentModel.findByPk(id);
            if (!studentFound) return res.status(404).json({ message: `Student with id ${id} not found` });
            const studentUpdated = await studentFound.update({ name, email, age });
            return res.json(studentUpdated);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Something went wrong" });
        }
    }

}









