"use strict";
exports.__esModule = true;
var express_1 = require("express");
var http = require("http");
var bodyparser = require("body-parser");
var winston = require("winston");
var expressWinston = require("express-winston");
var cors_1 = require("cors");
var files_routes_config_1 = require("./files/files.routes.config");
var debug_1 = require("debug");
var app = express_1["default"]();
var server = http.createServer(app);
var port = 3000;
var routes = [];
var debugLog = debug_1["default"]('app');
app.use(bodyparser.json());
app.use(cors_1["default"]());
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(winston.format.colorize(), winston.format.json())
}));
routes.push(new files_routes_config_1.FilesRoutes(app));
app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(winston.format.colorize(), winston.format.json())
}));
app.get('/', function (req, res) {
    res.status(200).send('Server up and running');
});
server.listen(port, function () {
    debugLog("Server running at http://localhost:" + port);
    routes.forEach(function (route) {
        debugLog("Routes configured for " + route.getName());
    });
});
