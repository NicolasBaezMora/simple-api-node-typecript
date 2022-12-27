import {Model, Optional} from "sequelize";

interface RecordAttributes {
    id: number;
    fk_student: number;
    fk_subject: number;
}

/*
  We have to declare the AuthorCreationAttributes to
  tell Sequelize and TypeScript that the property id,
  in this case, is optional to be passed at creation time
*/

interface RecordCreationAttributes extends Optional<RecordAttributes, "id"> {}



export interface Record extends Model<RecordAttributes, RecordCreationAttributes>, RecordAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}





