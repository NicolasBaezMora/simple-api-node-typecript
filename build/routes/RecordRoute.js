"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordRoute = void 0;
const RecordController_1 = require("./../controllers/RecordController");
const express_1 = require("express");
const recordRoute = (0, express_1.Router)();
exports.recordRoute = recordRoute;
const recordController = new RecordController_1.RecordController();
recordRoute.get("/", recordController.getAllRecords);
recordRoute.post("/", recordController.createRecord);
