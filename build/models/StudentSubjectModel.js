"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSubjectModel = void 0;
const SubjectModel_1 = require("./SubjectModel");
const StudentModel_1 = require("./StudentModel");
const Connectiondb_1 = require("./../db/Connectiondb");
const sequelize_1 = require("sequelize");
const StudentSubjectModel = Connectiondb_1.Connectiondb.sequelize().define("SubjectStudent", {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.NUMBER
    },
    fk_student: {
        allowNull: false,
        type: sequelize_1.DataTypes.NUMBER
    },
    fk_subject: {
        allowNull: false,
        type: sequelize_1.DataTypes.NUMBER
    }
});
exports.StudentSubjectModel = StudentSubjectModel;
StudentModel_1.StudentModel.hasMany(StudentSubjectModel, {
    foreignKey: "fk_student"
});
StudentSubjectModel.belongsTo(StudentModel_1.StudentModel);
SubjectModel_1.SubjectModel.hasMany(StudentSubjectModel, {
    foreignKey: "fk_subject"
});
StudentSubjectModel.belongsTo(SubjectModel_1.SubjectModel);
