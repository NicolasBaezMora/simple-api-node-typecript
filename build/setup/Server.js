"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const SubjectModel_1 = require("./../models/SubjectModel");
const StudentModel_1 = require("./../models/StudentModel");
const Connectiondb_1 = require("./../db/Connectiondb");
const express_1 = __importDefault(require("express"));
const RecordModel_1 = require("../models/RecordModel");
const cors_1 = __importDefault(require("cors"));
const StudentRoute_1 = require("../routes/StudentRoute");
const SubjectRoute_1 = require("../routes/SubjectRoute");
const RecordRoute_1 = require("../routes/RecordRoute");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.sequelizeInstance = Connectiondb_1.Connectiondb.sequelize();
        this.middlewares();
        this.authdb();
        this.initializeModels();
        this.routes();
    }
    authdb() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.sequelizeInstance.authenticate();
                console.log("Connection to database successsfully");
            }
            catch (err) {
                console.log("Something went wrong -> ", err);
            }
        });
    }
    initializeModels() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield StudentModel_1.StudentModel.sync({ force: true });
                yield SubjectModel_1.SubjectModel.sync({ force: true });
                yield RecordModel_1.RecordModel.sync({ force: true });
            }
            catch (err) {
                console.log("Error -> ", err);
            }
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use("/students", StudentRoute_1.studentRouter);
        this.app.use("/subjects", SubjectRoute_1.subjectRouter);
        this.app.use("/records", RecordRoute_1.recordRoute);
    }
    loadServer() {
        this.app.listen(process.env.PORT || "8000", () => {
            console.log("Server running...");
        });
    }
}
exports.Server = Server;
