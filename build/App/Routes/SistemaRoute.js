"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CadastroRoute_1 = require("./CadastroRoute");
var ServicoRoute_1 = require("./ServicoRoute");
var SolicitacaoRoute_1 = require("./SolicitacaoRoute");
var SistemaRoute = /** @class */ (function () {
    function SistemaRoute(app) {
        this.app = app;
        this.rotasCadastro = new CadastroRoute_1.default(this.app);
        this.rotasServico = new ServicoRoute_1.default(this.app);
        this.rotasSolicitacao = new SolicitacaoRoute_1.default(this.app);
        this.listaRotas();
    }
    SistemaRoute.prototype.listaRotas = function () {
        this.app.route('/').get(function (req, res) { return res.status(200).json({ 'message': 'Hello world!' }); });
    };
    return SistemaRoute;
}());
exports.default = SistemaRoute;
