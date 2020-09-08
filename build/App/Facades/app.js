"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dotenv = require("dotenv");
var bodyParser = require("body-parser");
var SistemaRoute_1 = require("../Routes/SistemaRoute");
var Connection_1 = require("../../Infrastructure/DataBase/Connection");
var App = /** @class */ (function () {
    function App() {
        dotenv.config();
        this.app = express();
        this.middleware();
        this.dataBaseConnection();
        this.routes = new SistemaRoute_1.default(this.app);
        this.routes.listaRotas();
    }
    App.prototype.middleware = function () {
        // this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    };
    App.prototype.dataBaseConnection = function () {
        this.db = new Connection_1.default();
        this.db.createConnection();
    };
    App.prototype.closeDataBaseConnection = function (message, callback) {
        this.db.closeConnection(message, function () { return callback(); });
    };
    return App;
}());
exports.default = new App();
