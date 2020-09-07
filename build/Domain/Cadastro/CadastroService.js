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
var UsuarioRepository_1 = require("../../Infrastructure/Repositorys/UsuarioRepository");
var NotificacoesService_1 = require("./NotificacoesService");
var ServicoService_1 = require("../Servicos/ServicoService");
var TermosUsoFactory_1 = require("../../Infrastructure/Factories/TermosUsoFactory");
var CadastroService = /** @class */ (function () {
    function CadastroService() {
        this.usuarioRepository = new UsuarioRepository_1.default();
        this.servicoService = new ServicoService_1.default();
        this.notificacaoService = new NotificacoesService_1.default();
    }
    CadastroService.prototype.buscaDadosDoCadastro = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var dadosCadastro, dadosEndereco, dadosServico, usuariosBloqueados, notificacao;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cadastro(id)];
                    case 1:
                        dadosCadastro = _a.sent();
                        return [4 /*yield*/, this.buscaEndereco(id)];
                    case 2:
                        dadosEndereco = _a.sent();
                        return [4 /*yield*/, this.servicoService.buscaServicosOferecidosPeloUsuario(id)];
                    case 3:
                        dadosServico = _a.sent();
                        return [4 /*yield*/, this.buscaUsuariosBloqueados(id)];
                    case 4:
                        usuariosBloqueados = _a.sent();
                        return [4 /*yield*/, this.usuarioRepository.buscaTodasAsNotificacoesDoUsuario(id)
                                .then(function (notificacoes) {
                                return notificacoes;
                            })
                                .catch(function (err) { return err; })];
                    case 5:
                        notificacao = _a.sent();
                        return [2 /*return*/, [{
                                    cadastro: dadosCadastro,
                                    endereco: dadosEndereco,
                                    servicosOferecidos: dadosServico,
                                    usuariosBloqueados: usuariosBloqueados,
                                    notificacoes: notificacao,
                                    avaliacoesFeitas: [],
                                    avaliacoesRecebidas: []
                                }]];
                }
            });
        });
    };
    CadastroService.prototype.cadastro = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.usuarioRepository.detalhaUsuario(id)
                        .then(function (cadastro) { return cadastro; })
                        .catch(function (err) { return err; })];
            });
        });
    };
    CadastroService.prototype.criaNovoCadastro = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cadastro, _a, _b, _i, key, _c, _d, _e, key;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.criaNovoUsuario(data.cadastro).then(function (cadastro) {
                            return cadastro;
                        })];
                    case 1:
                        cadastro = _f.sent();
                        _a = [];
                        for (_b in data.endereco)
                            _a.push(_b);
                        _i = 0;
                        _f.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        key = _a[_i];
                        return [4 /*yield*/, this.criaNovoEndereco(cadastro.id, data.endereco[key])];
                    case 3:
                        _f.sent();
                        _f.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        _c = [];
                        for (_d in data.servicosOferecidos)
                            _c.push(_d);
                        _e = 0;
                        _f.label = 6;
                    case 6:
                        if (!(_e < _c.length)) return [3 /*break*/, 9];
                        key = _c[_e];
                        return [4 /*yield*/, this.servicoService.incluiServicoParaUsuario(cadastro.id, data.servicosOferecidos[key])];
                    case 7:
                        _f.sent();
                        _f.label = 8;
                    case 8:
                        _e++;
                        return [3 /*break*/, 6];
                    case 9: return [4 /*yield*/, this.notificacaoService.criaNotificacaoDeBoasVindas(cadastro.id)];
                    case 10:
                        _f.sent();
                        return [4 /*yield*/, this.buscaDadosDoCadastro(cadastro.id)];
                    case 11: return [2 /*return*/, _f.sent()];
                }
            });
        });
    };
    CadastroService.prototype.criaNovoUsuario = function (data) {
        return this.usuarioRepository.criaUsuario(data);
    };
    CadastroService.prototype.editaUsuario = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuarioRepository.atualizaUsuario(id, data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CadastroService.prototype.buscaEndereco = function (idCadastro) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuarioRepository.buscaTodosOsEnderecosDoUsuario(idCadastro)
                            .then(function (enderecos) {
                            return enderecos;
                        })
                            .catch(function (err) { return err; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CadastroService.prototype.criaNovoEndereco = function (idCadastro, data) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            tipoEndereco: data.tipoEndereco,
                            cep: data.cep,
                            us: data.uf,
                            cidade: data.cidade,
                            bairro: data.bairro,
                            endereco: data.endereco,
                            numero: data.numero,
                            codUsuario: idCadastro
                        };
                        return [4 /*yield*/, this.usuarioRepository.criaEnderecoParaUsuario(request)
                                .then(function (endereco) { return endereco; })
                                .catch(function (err) { return err; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CadastroService.prototype.editaEndereco = function (idCadastro, idEndereco, data) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            tipoEndereco: data.tipoEndereco,
                            cep: data.cep,
                            us: data.uf,
                            cidade: data.cidade,
                            bairro: data.bairro,
                            endereco: data.endereco,
                            numero: data.numero,
                            codUsuario: idCadastro
                        };
                        return [4 /*yield*/, this.usuarioRepository.editaEnderecoUsuario(idEndereco, request)
                                .then(function (endereco) { return endereco; })
                                .catch(function (err) { return err; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CadastroService.prototype.deletaEndereco = function (idEndereco) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuarioRepository.deletaEnderecoUsuario(idEndereco)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CadastroService.prototype.buscaUsuariosBloqueados = function (idCadastro) {
        return __awaiter(this, void 0, void 0, function () {
            var usuariosBloqueados, listaBloqueio, _a, _b, _i, key, user;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.usuarioRepository.usuariosBloqueados(idCadastro)
                            .then(function (users) { return users; })
                            .catch(function (err) { return err; })];
                    case 1:
                        usuariosBloqueados = _c.sent();
                        listaBloqueio = new Array;
                        _a = [];
                        for (_b in usuariosBloqueados)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        key = _a[_i];
                        return [4 /*yield*/, this.usuarioRepository.detalhaUsuario(usuariosBloqueados[key].codUsuario)
                                .then(function (user) { return user; })
                                .catch(function (err) { return err; })];
                    case 3:
                        user = _c.sent();
                        listaBloqueio.push({
                            _id: usuariosBloqueados[key].id,
                            codUsuario: usuariosBloqueados[key].codUsuario,
                            nomeCompleto: user.nome + " " + user.sobrenome,
                            foto: user.foto,
                            dataBloqueio: usuariosBloqueados[key].dataBloqueio,
                        });
                        _c.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, listaBloqueio];
                }
            });
        });
    };
    CadastroService.prototype.bloqueiaCadastro = function (idUsuario, dados) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            codUsuario: idUsuario,
                            codUsuarioBlock: dados.codUsuarioBlock
                        };
                        return [4 /*yield*/, this.usuarioRepository.bloqueiaUsuario(request)
                                .then(function (usuario) { return usuario; })
                                .catch(function (err) { return err; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CadastroService.prototype.removeBloqueioCadastro = function (idBloqueio) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuarioRepository.desbloqueiaUsuario(idBloqueio)
                            .then(function (r) { return "Usuário desbloqueado com sucesso!"; })
                            .catch(function (err) { return err; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CadastroService.prototype.politicaDePrivacidade = function () {
        var privacidade = new Array;
        privacidade.push(TermosUsoFactory_1.default.termosDeUso());
        privacidade.push(TermosUsoFactory_1.default.politicaDePrivacidade());
        return privacidade;
    };
    return CadastroService;
}());
exports.default = CadastroService;
