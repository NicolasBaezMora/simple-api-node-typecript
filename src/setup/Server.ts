import { SubjectModel } from './../models/SubjectModel';
import { Sequelize } from 'sequelize';
import { StudentModel } from './../models/StudentModel';
import { Connectiondb } from './../db/Connectiondb';
import express, { Express } from 'express';
import { RecordModel } from '../models/RecordModel';
import cors from "cors";
import { studentRouter } from '../routes/StudentRoute';
import { subjectRouter } from '../routes/SubjectRoute';
import { recordRoute } from '../routes/RecordRoute';



export class Server {

    public app!: Express;
    public sequelizeInstance!: Sequelize;

    constructor() {
        this.app = express();
        this.sequelizeInstance = Connectiondb.sequelize();
        
        this.middlewares();
        this.authdb();
        this.initializeModels();
        this.routes();

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
            await RecordModel.sync({force: true});

        } catch(err) {
            console.log("Error -> ", err);
        }
    }

    private middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private routes() {
        this.app.use("/students", studentRouter);
        this.app.use("/subjects", subjectRouter);
        this.app.use("/records", recordRoute);
    }

    public loadServer() {
        this.app.listen(process.env.PORT || "8000", () => {
            console.log("Server running...");
        });
    }

}








