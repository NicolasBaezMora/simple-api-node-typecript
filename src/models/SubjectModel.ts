import { DataTypes } from 'sequelize';
import { Subject } from '../structure_models/Subject';
import { Connectiondb } from './../db/Connectiondb';


export const SubjectModel = Connectiondb.sequelize().define<Subject>("subject", {
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.NUMBER,
        autoIncrement: true
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    }
});




