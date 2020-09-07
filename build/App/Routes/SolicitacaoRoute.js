"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SolicitacoesController_1 = require("../Controllers/SolicitacoesController");
var SolicitacaoRoute = /** @class */ (function () {
    function SolicitacaoRoute(app) {
        this.app = app;
        this.listaRotas();
    }
    SolicitacaoRoute.prototype.listaRotas = function () {
        this.app.route('/solicitacao/:id').get(function (req, res) { return SolicitacoesController_1.default.buscaSolicitacoes(req, res); });
        this.app.route('/usuario/:id/solicitacoes').post(function (req, res) { return SolicitacoesController_1.default.criaSolicitacao(req, res); });
        this.app.route('/solicitacao/:id/atribuir').put(function (req, res) { return SolicitacoesController_1.default.atribuiSolicitacaoParaUsuario(req, res); });
        this.app.route('/solicitacao/:id/finalizar').get(function (req, res) { return SolicitacoesController_1.default.finalizacaoSolicitacao(req, res); });
        this.app.route('/solicitacao/:id/cancelar').get(function (req, res) { return SolicitacoesController_1.default.cancelaSolicitacao(req, res); });
        this.app.route('/solicitacao/:id/chat').get(function (req, res) { return SolicitacoesController_1.default.recuperaHistoricoDoChat(req, res); });
        this.app.route('/solicitacao/:id/chat').post(function (req, res) { return SolicitacoesController_1.default.enviaMensagem(req, res); });
        this.app.route('/solicitacao/:id/chat/:id/visualizar').get(function (req, res) { return SolicitacoesController_1.default.marcaMensagemComoLida(req, res); });
    };
    return SolicitacaoRoute;
}());
exports.default = SolicitacaoRoute;
