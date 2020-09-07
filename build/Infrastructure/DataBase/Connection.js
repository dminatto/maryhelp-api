"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var DataBase = /** @class */ (function () {
    function DataBase() {
    }
    DataBase.prototype.createConnection = function () {
        if (process.env.NODE_ENV == 'production') {
            mongoose.connect(process.env.DATABASE_URL);
            this.logger(process.env.DATABASE_URL);
        }
        else {
            mongoose.connect(process.env.DB_URI);
            this.logger(process.env.DB_URI);
        }
    };
    DataBase.prototype.logger = function (uri) {
        this.dbConnection = mongoose.connection;
        this.dbConnection.on('connected', function () {
            return console.log('Mongoose está conectado ao ' + uri);
        });
        this.dbConnection.on('error', function (error) {
            return console.error.bind(console, 'Erro na conexão: ' + error);
        });
        this.dbConnection.on('disconnected', function () {
            return console.log('Mongoose está desconectado do ' + uri);
        });
    };
    DataBase.prototype.closeConnection = function (message, callback) {
        this.dbConnection.close(function () {
            console.log('Mongoose foi desconectado pelo: ' + message);
            callback();
        });
    };
    return DataBase;
}());
exports.default = DataBase;
