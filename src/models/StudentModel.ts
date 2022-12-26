import { DataTypes } from 'sequelize';
import { Connectiondb } from '../db/Connectiondb';
import { Student } from '../structure_models/Student';


export const StudentModel = Connectiondb.sequelize().define<Student>("Student", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.NUMBER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING
    },
    age: {
        allowNull: false,
        type: DataTypes.NUMBER
    }
});












