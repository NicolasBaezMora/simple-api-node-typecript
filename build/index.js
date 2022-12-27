"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./setup/Server");
require("dotenv/config");
const server = new Server_1.Server();
server.loadServer();
