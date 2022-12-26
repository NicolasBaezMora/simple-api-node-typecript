import {Model, Optional} from "sequelize";

interface SubjectAttributes {
    id: number;
    name: string;
}

interface SubjectCreationAttributes extends Optional<SubjectAttributes, "id"> {}

export interface Subject extends Model<SubjectAttributes, SubjectCreationAttributes>, SubjectAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}



