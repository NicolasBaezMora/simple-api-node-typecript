import { SubjectModel } from './SubjectModel';
import { StudentModel } from './StudentModel';
import { Connectiondb } from '../db/Connectiondb';
import {DataTypes} from "sequelize";
import { Record } from '../structure_models/Record';


const RecordModel = Connectiondb.sequelize().define<Record>("record", {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.NUMBER
    },
    fk_student: {
        allowNull: false,
        type: DataTypes.NUMBER,
        references: {
            model: StudentModel,
            key: "id"
        }
    },
    fk_subject: {
        allowNull: false,
        type: DataTypes.NUMBER,
        references: {
            model: SubjectModel,
            key: "id"
        }
    }
});

StudentModel.hasMany(RecordModel,{
    foreignKey: "fk_student"
});
RecordModel.belongsTo(StudentModel);


SubjectModel.hasMany(RecordModel, {
    foreignKey: "fk_subject"
});
RecordModel.belongsTo(SubjectModel);


export {RecordModel};
