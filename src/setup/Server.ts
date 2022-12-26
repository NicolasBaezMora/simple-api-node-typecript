import { SubjectModel } from './../models/SubjectModel';
import { Subject } from './../structure_models/Subject';
import { Sequelize } from 'sequelize';
import { StudentModel } from './../models/StudentModel';
import { Connectiondb } from './../db/Connectiondb';
import express, { Express } from 'express';
import { StudentSubjectModel } from '../models/StudentSubjectModel';


export class Server {

    public app!: Express;
    public sequelizeInstance!: Sequelize;

    constructor() {
        this.app = express();
        this.sequelizeInstance = Connectiondb.sequelize();

        this.authdb();
        this.initializeModels();
    }


    private async authdb() {
        try {
            this.sequelizeInstance.authenticate();
            console.log("Connection to database successsfully");
        } catch(err) {
            console.log("Something went wrong -> ", err);
        }

    }

    private async initializeModels() {
        try {
            await StudentModel.sync({ force: true });
            await SubjectModel.sync({force: true});
            await StudentSubjectModel.sync({force: true});

        } catch(err) {
            console.log("Error -> ", err);
        }
    }

}








