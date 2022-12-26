import { SubjectModel } from './SubjectModel';
import { StudentModel } from './StudentModel';
import { Connectiondb } from './../db/Connectiondb';
import {DataTypes} from "sequelize";
import { StudentSubject } from '../structure_models/StudentSubject';


const StudentSubjectModel = Connectiondb.sequelize().define<StudentSubject>("SubjectStudent", {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.NUMBER
    },
    fk_student: {
        allowNull: false,
        type: DataTypes.NUMBER
    },
    fk_subject: {
        allowNull: false,
        type: DataTypes.NUMBER
    }
});

StudentModel.hasMany(StudentSubjectModel,{
    foreignKey: "fk_student"
});
StudentSubjectModel.belongsTo(StudentModel);


SubjectModel.hasMany(StudentSubjectModel, {
    foreignKey: "fk_subject"
});
StudentSubjectModel.belongsTo(SubjectModel);


export {StudentSubjectModel};
