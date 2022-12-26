import { Sequelize } from "sequelize";


export class Connectiondb {

    public static sequelize(): Sequelize {
        return new Sequelize("oracle://NODE_PRACTICE:123456@localhost:1521/XE");
    }

}








