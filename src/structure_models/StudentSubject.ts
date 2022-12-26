import {Model, Optional} from "sequelize";

interface StudentSubjectAttributes {
    id: number;
    fk_student: number;
    fk_subject: number;
}

/*
  We have to declare the AuthorCreationAttributes to
  tell Sequelize and TypeScript that the property id,
  in this case, is optional to be passed at creation time
*/

interface StudentSubjectCreationAttributes extends Optional<StudentSubjectAttributes, "id"> {}



export interface StudentSubject extends Model<StudentSubjectAttributes, StudentSubjectCreationAttributes>, StudentSubjectAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}





