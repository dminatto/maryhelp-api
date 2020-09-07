"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServicosController_1 = require("../Controllers/ServicosController");
var ServicoRoute = /** @class */ (function () {
    function ServicoRoute(app) {
        this.app = app;
        this.listaRotas();
    }
    ServicoRoute.prototype.listaRotas = function () {
        this.app.route('/servico').get(function (req, res) { return ServicosController_1.default.buscaServicos(req, res); });
        this.app.route('/servico').post(function (req, res) { return ServicosController_1.default.criaServico(req, res); });
        this.app.route('/usuario/:id/servicos').post(function (req, res) { return ServicosController_1.default.incluiServicoUsuario(req, res); });
        this.app.route('/usuario/:id/servicos/:servicoId').put(function (req, res) { return ServicosController_1.default.editaServicoUsuario(req, res); });
        this.app.route('/usuario/:id/servicos/:servicoId').delete(function (req, res) { return ServicosController_1.default.excluiServicoUsuario(req, res); }); //testar depois
    };
    return ServicoRoute;
}());
exports.default = ServicoRoute;
