"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connectiondb = void 0;
const sequelize_1 = require("sequelize");
class Connectiondb {
    static sequelize() {
        return new sequelize_1.Sequelize("oracle://NODE_PRACTICE:123456@localhost:1521/XE");
    }
}
exports.Connectiondb = Connectiondb;
