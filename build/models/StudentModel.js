"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const sequelize_1 = require("sequelize");
const Connectiondb_1 = require("../db/Connectiondb");
exports.StudentModel = Connectiondb_1.Connectiondb.sequelize().define("student", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.NUMBER
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    age: {
        allowNull: false,
        type: sequelize_1.DataTypes.NUMBER
    }
});
