import {Model, Optional} from "sequelize";

interface StudentAttributes {
    id: number;
    name: string;
    email: string;
    age: number;
}

interface StudentCreationAttributes extends Optional<StudentAttributes, "id"> {}

export interface Student extends Model<StudentAttributes, StudentCreationAttributes>, StudentAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}