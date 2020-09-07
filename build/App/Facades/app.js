"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dotenv = require("dotenv");
var bodyParser = require("body-parser");
var Connection_1 = require("../../Infrastructure/DataBase/Connection");
var ServicosController_1 = require("../Controllers/ServicosController");
var UsuarioController_1 = require("../Controllers/UsuarioController");
var App = /** @class */ (function () {
    function App() {
        dotenv.config();
        this.app = express();
        this.middleware();
        this.db = new Connection_1.default();
        this.db.createConnection();
        this.routes();
        this.servicos = new ServicosController_1.default();
        this.usuarios = new UsuarioController_1.default();
    }
    App.prototype.middleware = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    };
    App.prototype.dataBaseConnection = function () {
        this.db.createConnection();
    };
    App.prototype.closeDataBaseConnection = function (message, callback) {
        this.db.closeConnection(message, function () { return callback(); });
    };
    App.prototype.routes = function () {
        var _this = this;
        this.app.route('/').get(function (req, res) { return res.status(200).json({ 'message': 'Hello world!' }); });
        this.app.route('/privacidade').get(function (req, res) { return _this.usuarios.privacidade(req, res); });
        this.app.route('/servico').get(function (req, res) { return _this.servicos.buscaServicos(req, res); });
        this.app.route('/servico').post(function (req, res) { return _this.servicos.criaServico(req, res); });
        this.app.route('/novo-cadastro').post(function (req, res) { return _this.usuarios.criaUsuario(req, res); });
        this.app.route('/usuario/:id').get(function (req, res) { return _this.usuarios.buscaUsuario(req, res); });
        this.app.route('/usuario/:id').put(function (req, res) { return _this.usuarios.editaUsuario(req, res); });
        this.app.route('/usuario/:id/servicos').post(function (req, res) { return _this.servicos.incluiServicoUsuario(req, res); });
        this.app.route('/usuario/:id/servicos/:servicoId').put(function (req, res) { return _this.servicos.editaServicoUsuario(req, res); });
        this.app.route('/usuario/:id/servicos/:servicoId').delete(function (req, res) { return _this.servicos.excluiServicoUsuario(req, res); }); //testar depois
        this.app.route('/usuario/:id/endereco').post(function (req, res) { return _this.usuarios.incluiEndereco(req, res); });
        this.app.route('/usuario/:id/endereco/:enderecoId').put(function (req, res) { return _this.usuarios.editaEndereco(req, res); });
        this.app.route('/usuario/:id/endereco/:enderecoId').delete(function (req, res) { return _this.usuarios.excluiEndereco(req, res); }); //testar depois
        this.app.route('/usuario/:id/notificacoes/:notificacaoId').put(function (req, res) { return _this.usuarios.marcarNotificacaoComoLida(req, res); });
        this.app.route('/usuario/:id/block').post(function (req, res) { return _this.usuarios.bloqueiaUsuario(req, res); });
        this.app.route('/usuario/:id/block/:blockid').delete(function (req, res) { return _this.usuarios.deletaBloqueio(req, res); }); //testar depois
    };
    return App;
}());
exports.default = new App();
