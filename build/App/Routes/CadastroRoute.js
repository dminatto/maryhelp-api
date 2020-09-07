"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsuarioController_1 = require("../Controllers/UsuarioController");
var CadastroRoute = /** @class */ (function () {
    function CadastroRoute(app) {
        this.app = app;
        this.listaRotas();
    }
    CadastroRoute.prototype.listaRotas = function () {
        this.app.route('/novo-cadastro').post(function (req, res) { return UsuarioController_1.default.criaUsuario(req, res); });
        this.app.route('/usuario/:id').get(function (req, res) { return UsuarioController_1.default.buscaUsuario(req, res); });
        this.app.route('/usuario/:id').put(function (req, res) { return UsuarioController_1.default.editaUsuario(req, res); });
        this.app.route('/usuario/:id/endereco').post(function (req, res) { return UsuarioController_1.default.incluiEndereco(req, res); });
        this.app.route('/usuario/:id/endereco/:enderecoId').put(function (req, res) { return UsuarioController_1.default.editaEndereco(req, res); });
        this.app.route('/usuario/:id/endereco/:enderecoId').delete(function (req, res) { return UsuarioController_1.default.excluiEndereco(req, res); }); //testar depois
        this.app.route('/usuario/:id/notificacoes/:notificacaoId').put(function (req, res) { return UsuarioController_1.default.marcarNotificacaoComoLida(req, res); });
        this.app.route('/usuario/:id/block').post(function (req, res) { return UsuarioController_1.default.bloqueiaUsuario(req, res); });
        this.app.route('/usuario/:id/block/:blockid').delete(function (req, res) { return UsuarioController_1.default.deletaBloqueio(req, res); }); //testar depois
        this.app.route('/privacidade').get(function (req, res) { return UsuarioController_1.default.privacidade(req, res); });
    };
    return CadastroRoute;
}());
exports.default = CadastroRoute;
