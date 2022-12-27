"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectModel = void 0;
const sequelize_1 = require("sequelize");
const Connectiondb_1 = require("./../db/Connectiondb");
exports.SubjectModel = Connectiondb_1.Connectiondb.sequelize().define("subject", {
    id: {
        primaryKey: true,
        allowNull: false,
        type: sequelize_1.DataTypes.NUMBER,
        autoIncrement: true
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    }
});
