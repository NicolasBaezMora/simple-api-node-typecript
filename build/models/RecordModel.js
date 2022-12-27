"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordModel = void 0;
const SubjectModel_1 = require("./SubjectModel");
const StudentModel_1 = require("./StudentModel");
const Connectiondb_1 = require("../db/Connectiondb");
const sequelize_1 = require("sequelize");
const RecordModel = Connectiondb_1.Connectiondb.sequelize().define("record", {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.NUMBER
    },
    fk_student: {
        allowNull: false,
        type: sequelize_1.DataTypes.NUMBER,
        references: {
            model: StudentModel_1.StudentModel,
            key: "id"
        }
    },
    fk_subject: {
        allowNull: false,
        type: sequelize_1.DataTypes.NUMBER,
        references: {
            model: SubjectModel_1.SubjectModel,
            key: "id"
        }
    }
});
exports.RecordModel = RecordModel;
StudentModel_1.StudentModel.hasMany(RecordModel, {
    foreignKey: "fk_student"
});
RecordModel.belongsTo(StudentModel_1.StudentModel);
SubjectModel_1.SubjectModel.hasMany(RecordModel, {
    foreignKey: "fk_subject"
});
RecordModel.belongsTo(SubjectModel_1.SubjectModel);
