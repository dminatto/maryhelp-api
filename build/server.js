"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./App/Facades/app");
var porta = (process.env.NODE_ENV == 'production') ? process.env.PORT : 5000;
app_1.default.app.listen(porta, function () { return console.log('servidor está rodando na porta: ' + porta); });
process.once('SIGUSR2', function () { return app_1.default.closeDataBaseConnection('nodemon restart', function () { return process.kill(process.pid, 'SIGUSR2'); }); });
process.on('SIGINT', function () { return app_1.default.closeDataBaseConnection('execução foi interrompida', function () { return process.exit(0); }); });
