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
var SolicitacoesRepository_1 = require("../../Infrastructure/Repositorys/SolicitacoesRepository");
var CadastroService_1 = require("../Cadastro/CadastroService");
var ServicoService_1 = require("../Servicos/ServicoService");
var SOLICITACAO_CANCELADA = 0;
var SOLICITACAO_ABERTA = 1;
var SOLICITACAO_EM_ANDAMENTO = 2;
var SOLICITACAO_FINALIZADA = 3;
var INTERESSE_AGUARDANDO = 0;
var INTERESSE_APROVADO = 1;
var INTERESSE_REPROVADO = 2;
var SolicitacoesController = /** @class */ (function () {
    function SolicitacoesController() {
        this.repository = new SolicitacoesRepository_1.default();
        this.usuarioService = new CadastroService_1.default();
        this.servicoService = new ServicoService_1.default();
    }
    SolicitacoesController.prototype.criaSolicitacao = function (idUsuario, dados) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            codSolicitante: idUsuario,
                            codSolicitado: dados.codSolicitado,
                            codServico: dados.codServico
                        };
                        return [4 /*yield*/, this.repository.criaSolicitacao(request)
                                .then(function (solicitacao) { return solicitacao; })
                                .catch(function (err) { return err; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SolicitacoesController.prototype.editaSolicitacao = function (idUsuario, idSolicitacao, dados) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            codSolicitante: idUsuario,
                            codServico: dados.codServico,
                            status: dados.status,
                            ativo: dados.ativo
                        };
                        return [4 /*yield*/, this.repository.editaSolicitacao(idSolicitacao, request)
                                .then(function (solicitacao) { return solicitacao; })
                                .catch(function (err) { return err; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SolicitacoesController.prototype.atribuiSolicitacao = function (idSolicitacao, data) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            codSolicitado: data.idSolicitado,
                            status: SOLICITACAO_EM_ANDAMENTO
                        };
                        return [4 /*yield*/, this.repository.editaSolicitacao(idSolicitacao, request)
                                .then(function (solicitacao) {
                                //todo: enviar uma notificacao
                                return "Solicitacao atribuida com sucesso!";
                            })
                                .catch(function (err) { return err; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SolicitacoesController.prototype.sinalizaInteresse = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.criaInteresse(data).then(function (solicitacao) {
                            //todo: enviar uma notificacao
                            return "Interesse registrado com sucesso!";
                        })
                            .catch(function (err) { return err; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SolicitacoesController.prototype.geraMatch = function (idInteresse) {
        return __awaiter(this, void 0, void 0, function () {
            var interesse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.match(idInteresse, INTERESSE_APROVADO)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.repository.buscaInteresse(idInteresse)
                                .then(function (obj) { return obj; })
                                .catch(function (err) { return err; })];
                    case 2:
                        interesse = _a.sent();
                        return [4 /*yield*/, this.atribuiSolicitacao(interesse.codSolicitacao, { idSolicitado: interesse.codSolicitante })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SolicitacoesController.prototype.recusaMatch = function (idInteresse) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.repository.match(idInteresse, INTERESSE_REPROVADO)
                        .then(function (obj) { return "Usuario recusado com sucesso!"; })
                        .catch(function (err) { return err; })];
            });
        });
    };
    SolicitacoesController.prototype.finalizaSolicitacao = function (idSolicitacao) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.finalizaSolicitacao(idSolicitacao)
                            .then(function (solicitacao) {
                            //todo: enviar uma notificacao
                            return "Solicitacao finalizada com sucesso!";
                        })
                            .catch(function (err) { return err; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SolicitacoesController.prototype.cancelaSolicitacao = function (idSolicitacao) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            status: SOLICITACAO_CANCELADA,
                            ativo: 0
                        };
                        return [4 /*yield*/, this.repository.editaSolicitacao(idSolicitacao, request)
                                .then(function (solicitacao) {
                                //todo: enviar uma notificacao
                                return "Solicitacao cancelada com sucesso!";
                            })
                                .catch(function (err) { return err; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SolicitacoesController.prototype.buscaTodasSolicitacoesEmAberto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var solicitacoes, listaSolicitacoes, _a, _b, _i, key, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.repository.buscaSolicitacoesEmAberto()
                            .then(function (solicitacao) { return solicitacao; })
                            .catch(function (err) { return err; })];
                    case 1:
                        solicitacoes = _e.sent();
                        listaSolicitacoes = new Array;
                        console.log(solicitacoes);
                        _a = [];
                        for (_b in solicitacoes)
                            _a.push(_b);
                        _i = 0;
                        _e.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        key = _a[_i];
                        if (this.isEmpty(solicitacoes[key].codSolicitante) || this.isEmpty(solicitacoes[key].codServico)) {
                            return [3 /*break*/, 4];
                        }
                        _d = (_c = listaSolicitacoes).push;
                        return [4 /*yield*/, this.detalhaSolicitacao(solicitacoes[key])];
                    case 3:
                        _d.apply(_c, [_e.sent()]);
                        _e.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, listaSolicitacoes];
                }
            });
        });
    };
    SolicitacoesController.prototype.buscaTodasSolicitacoesPorTipoDeServico = function () {
        return __awaiter(this, void 0, void 0, function () {
            var solicitacoes, listaSolicitacoes, _a, _b, _i, key, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.repository.buscaSolicitacoesEmAberto()
                            .then(function (solicitacao) { return solicitacao; })
                            .catch(function (err) { return err; })];
                    case 1:
                        solicitacoes = _e.sent();
                        listaSolicitacoes = new Array;
                        console.log(solicitacoes);
                        _a = [];
                        for (_b in solicitacoes)
                            _a.push(_b);
                        _i = 0;
                        _e.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        key = _a[_i];
                        if (this.isEmpty(solicitacoes[key].codSolicitante) || this.isEmpty(solicitacoes[key].codServico)) {
                            return [3 /*break*/, 4];
                        }
                        _d = (_c = listaSolicitacoes).push;
                        return [4 /*yield*/, this.detalhaSolicitacao(solicitacoes[key])];
                    case 3:
                        _d.apply(_c, [_e.sent()]);
                        _e.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, listaSolicitacoes];
                }
            });
        });
    };
    SolicitacoesController.prototype.detalhaSolicitacao = function (solicitacao) {
        return __awaiter(this, void 0, void 0, function () {
            var user, servico;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuarioService.cadastro(solicitacao.codSolicitante)];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, this.servicoService.buscarServico(solicitacao.codServico).
                                then(function (servico) {
                                console.log('retono do servico');
                                console.log(servico);
                                return servico;
                            }).catch(function (err) { return err; })];
                    case 2:
                        servico = _a.sent();
                        return [2 /*return*/, {
                                _id: solicitacao.id,
                                codSolicitante: solicitacao.codSolicitante,
                                nomeCompleto: user.nome + " " + user.sobrenome,
                                foto: user.foto,
                                codServico: solicitacao.codServico,
                                nomeServico: servico.nome,
                                dataSolicitacao: solicitacao.dataSolicitacao
                            }];
                }
            });
        });
    };
    SolicitacoesController.prototype.buscaAvaliacoesSolicitacoesFeitas = function (idUsuario) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    SolicitacoesController.prototype.buscaAvaliacoesSolicitacoesRecebidas = function (idUsuario) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    SolicitacoesController.prototype.enviarMensagen = function (idUsuario, idSolicitacao, dados) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            codSolicitacao: idSolicitacao,
                            codUsuario: idUsuario,
                            mensagem: dados.mensagem
                        };
                        return [4 /*yield*/, this.repository.enviaMensagem(request)
                                .then(function (mensagem) { return mensagem; })
                                .catch(function (err) { return err; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SolicitacoesController.prototype.lerMensagem = function (idMensagem) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.lerMensagem(idMensagem)
                            .then(function (mensagem) { return mensagem; })
                            .catch(function (err) { return err; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SolicitacoesController.prototype.historicoDoChat = function (idSolicitacao) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.buscaHistoricoDeMensagens(idSolicitacao)
                            .then(function (mensagem) { return mensagem; })
                            .catch(function (err) { return err; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SolicitacoesController.prototype.historicoDeMensagen = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    SolicitacoesController.prototype.isEmpty = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    };
    return SolicitacoesController;
}());
exports.default = SolicitacoesController;
