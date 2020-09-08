"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var SolicitacoesServer_1 = require("../../Domain/Solicitacoes/SolicitacoesServer");
var SolicitacoesController = /** @class */ (function () {
    function SolicitacoesController() {
        this.service = new SolicitacoesServer_1.default();
    }
    SolicitacoesController.prototype.buscaSolicitacoes = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.buscaSolicitacoesDoUsuario(req.params.id)
                            .then(function (solicitacao) { return res.status(200).json({ 'result': solicitacao }); })
                            .catch(function (err) { return res.status(400).json({ 'result': err }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SolicitacoesController.prototype.buscaSolicitacoesPorServico = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.buscaTodasSolicitacoesPorTipoDeServico(req.params.idServico)
                            .then(function (solicitacao) { return res.status(200).json({ 'result': solicitacao }); })
                            .catch(function (err) { return res.status(400).json({ 'result': err }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SolicitacoesController.prototype.buscaSolicitacoesEmAberto = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var solicitacoes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.buscaTodasSolicitacoesEmAberto(req.params.id)];
                    case 1:
                        solicitacoes = _a.sent();
                        return [2 /*return*/, res.status(200).json({ 'result': solicitacoes })];
                }
            });
        });
    };
    SolicitacoesController.prototype.criaSolicitacao = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var solicitacao;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.criaSolicitacao(req.params.id, req.body)];
                    case 1:
                        solicitacao = _a.sent();
                        return [2 /*return*/, res.status(200).json({ 'result': solicitacao })];
                }
            });
        });
    };
    SolicitacoesController.prototype.atribuiSolicitacaoParaUsuario = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.atribuiSolicitacao(req.params.id, req.body)
                            .then(function (solicitacao) { return res.status(200).json({ 'result': "Solicitação atribuida com sucesso" }); })
                            .catch(function (err) { return res.status(400).json({ 'result': err }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SolicitacoesController.prototype.finalizacaoSolicitacao = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.finalizaSolicitacao(req.params.id)
                            .then(function (solicitacao) { return res.status(200).json({ 'result': "Solicitação finalizada com sucesso" }); })
                            .catch(function (err) { return res.status(400).json({ 'result': err }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SolicitacoesController.prototype.cancelaSolicitacao = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.cancelaSolicitacao(req.params.id)
                            .then(function (solicitacao) { return res.status(200).json({ 'result': "Solicitação cancelada com sucesso" }); })
                            .catch(function (err) { return res.status(400).json({ 'result': err }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SolicitacoesController.prototype.recuperaHistoricoDoChat = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.historicoDoChat(req.params.id)
                            .then(function (solicitacao) { return res.status(200).json({ 'result': solicitacao }); })
                            .catch(function (err) { return res.status(400).json({ 'result': err }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SolicitacoesController.prototype.enviaMensagem = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.enviarMensagen(req.params.id, req.body)
                            .then(function (solicitacao) { return res.status(200).json({ 'result': solicitacao }); })
                            .catch(function (err) { return res.status(400).json({ 'result': err }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SolicitacoesController.prototype.marcaMensagemComoLida = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.lerMensagem(req.params.idMensagem)
                            .then(function (solicitacao) { return res.status(200).json({ 'result': "Mensagem lida!" }); })
                            .catch(function (err) { return res.status(400).json({ 'result': err }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SolicitacoesController.prototype.sinalizaInteresse = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var interesse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.sinalizaInteresse(req.body)];
                    case 1:
                        interesse = _a.sent();
                        return [2 /*return*/, res.status(200).json({ 'result': interesse })];
                }
            });
        });
    };
    SolicitacoesController.prototype.geraMatch = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var interesse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.geraMatch(req.params.id)];
                    case 1:
                        interesse = _a.sent();
                        return [2 /*return*/, res.status(200).json({ 'result': interesse })];
                }
            });
        });
    };
    SolicitacoesController.prototype.recusaMatch = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var interesse;
            return __generator(this, function (_a) {
                interesse = this.service.recusaMatch(req.params.id);
                return [2 /*return*/, res.status(200).json({ 'result': interesse })];
            });
        });
    };
    return SolicitacoesController;
}());
exports.default = new SolicitacoesController();
