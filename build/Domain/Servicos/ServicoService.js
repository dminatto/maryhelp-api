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
var ServicosRepository_1 = require("../../Infrastructure/Repositorys/ServicosRepository");
var ServicoService = /** @class */ (function () {
    function ServicoService() {
        this.repository = new ServicosRepository_1.default();
    }
    ServicoService.prototype.todos = function () {
        return this.repository.buscaTodosOsServicos();
    };
    ServicoService.prototype.criar = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.criaCadastroDeServicos(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ServicoService.prototype.incluiServicoParaUsuario = function (idCadastro, data) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            codServico: data.codServico,
                            tipoAtendimento: data.tipoAtendimento,
                            aceitaPermuta: data.aceitaPermuta,
                            valor: data.valor,
                            codUsuario: idCadastro
                        };
                        return [4 /*yield*/, this.repository.incluiServicoParaUsuario(request)
                                .then(function (servico) { return servico; })
                                .catch(function (err) { return err; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ServicoService.prototype.buscarServico = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.buscarServico(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ServicoService.prototype.buscaServicosOferecidosPeloUsuario = function (idCadastro) {
        return __awaiter(this, void 0, void 0, function () {
            var servicosOfertados, listaOfertas, _a, _b, _i, key, servico;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.repository.buscaTodosOsServicosDoUsuario(idCadastro)
                            .then(function (listaServicos) { return listaServicos; })
                            .catch(function (err) { return err; })];
                    case 1:
                        servicosOfertados = _c.sent();
                        listaOfertas = new Array;
                        _a = [];
                        for (_b in servicosOfertados)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        key = _a[_i];
                        return [4 /*yield*/, this.buscarServico(servicosOfertados[key].codServico).
                                then(function (servico) { return servico; }).catch(function (err) { return err; })];
                    case 3:
                        servico = _c.sent();
                        listaOfertas.push({
                            _id: servicosOfertados[key].id,
                            nomeServico: servico.nome,
                            tipoAtendimento: servicosOfertados[key].tipoAtendimento,
                            aceitaPermuta: servicosOfertados[key].aceitaPermuta,
                            valor: servicosOfertados[key].valor
                        });
                        _c.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, listaOfertas];
                }
            });
        });
    };
    ServicoService.prototype.editaServicoUsuario = function (idUsuario, codUsuarioServico, dados) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            codUsuario: idUsuario,
                            codServico: dados.codServico,
                            tipoAtendimento: dados.tipoAtendimento,
                            aceitaPermuta: dados.aceitaPermuta,
                            valor: dados.valor
                        };
                        return [4 /*yield*/, this.repository.editaServicoUsuario(codUsuarioServico, request)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ServicoService.prototype.apagaServicoUsuario = function (codUsuarioServico) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.removeServicoDoUsuario(codUsuarioServico)];
                    case 1: 
                    //validar depois se não está em nenhuma solicitacao
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ServicoService;
}());
exports.default = ServicoService;
