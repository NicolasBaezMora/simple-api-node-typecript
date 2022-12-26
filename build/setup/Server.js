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
const StudentSubjectModel_1 = require("../models/StudentSubjectModel");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.sequelizeInstance = Connectiondb_1.Connectiondb.sequelize();
        this.authdb();
        this.initializeModels();
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
                yield StudentSubjectModel_1.StudentSubjectModel.sync({ force: true });
            }
            catch (err) {
                console.log("Error -> ", err);
            }
        });
    }
}
exports.Server = Server;
