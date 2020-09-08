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
var Solicitacoes_1 = require("../Models/Solicitacoes");
var SolicitacoesAvaliacoes_1 = require("../Models/SolicitacoesAvaliacoes");
var SolicitacoesMensagens_1 = require("../Models/SolicitacoesMensagens");
var Interesse_1 = require("../Models/Interesse");
var SOLICITACAO_CANCELADA = 0;
var SOLICITACAO_ABERTA = 1;
var SOLICITACAO_EM_ANDAMENTO = 2;
var SOLICITACAO_FINALIZADA = 3;
var SolicitacoesRepository = /** @class */ (function () {
    function SolicitacoesRepository() {
    }
    SolicitacoesRepository.prototype.buscaSolicitacoesSolicitante = function (idUsuario, statusSolicitacao) {
        return Solicitacoes_1.default.find({ status: statusSolicitacao })
            .where({ codSolicitante: idUsuario });
    };
    SolicitacoesRepository.prototype.buscaSolicitacoesSolicitado = function (idUsuario, statusSolicitacao) {
        return Solicitacoes_1.default.find({ status: statusSolicitacao })
            .where({ codSolicitado: idUsuario });
    };
    SolicitacoesRepository.prototype.buscaSolicitacoesPorServico = function (idServico) {
        return Solicitacoes_1.default.find({ codServico: idServico })
            .where({ status: SOLICITACAO_ABERTA });
    };
    SolicitacoesRepository.prototype.buscaSolicitacoesEmAberto = function () {
        return Solicitacoes_1.default.find({ status: SOLICITACAO_ABERTA })
            .where({ ativo: 1 });
    };
    SolicitacoesRepository.prototype.criaSolicitacao = function (dados) {
        return Solicitacoes_1.default.create(dados);
    };
    SolicitacoesRepository.prototype.editaSolicitacao = function (id, dados) {
        return Solicitacoes_1.default.findById(id).update(dados);
    };
    SolicitacoesRepository.prototype.cancelaSolicitacao = function (id) {
        return Solicitacoes_1.default.findById(id).update({ status: SOLICITACAO_CANCELADA });
    };
    SolicitacoesRepository.prototype.finalizaSolicitacao = function (id) {
        return Solicitacoes_1.default.findById(id).update({ status: SOLICITACAO_FINALIZADA });
    };
    SolicitacoesRepository.prototype.registraAvaliacao = function (dados) {
        return SolicitacoesAvaliacoes_1.default.create(dados);
    };
    ;
    SolicitacoesRepository.prototype.editaAvaliacao = function (id, dados) {
        return SolicitacoesAvaliacoes_1.default.findById(id).update(dados);
    };
    ;
    SolicitacoesRepository.prototype.buscaAvaliacoesRecebidas = function (idUsuario) {
        //return modelSolicitacaoAvaliacao.find({});
    };
    SolicitacoesRepository.prototype.buscaAvaliacoesGeradas = function (idUsuario) {
        return SolicitacoesAvaliacoes_1.default.find({ codUsuario: idUsuario });
    };
    SolicitacoesRepository.prototype.enviaMensagem = function (dados) {
        return SolicitacoesMensagens_1.default.create(dados);
    };
    SolicitacoesRepository.prototype.lerMensagem = function (id) {
        return SolicitacoesMensagens_1.default.findById(id).update({ lido: 1 });
    };
    SolicitacoesRepository.prototype.buscaHistoricoDeMensagens = function (idSolicitacao) {
        return SolicitacoesMensagens_1.default.find({ idSolicitacao: idSolicitacao });
    };
    SolicitacoesRepository.prototype.criaInteresse = function (dados) {
        return Interesse_1.default.create(dados);
    };
    SolicitacoesRepository.prototype.buscaInteresse = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Interesse_1.default.findById(id)];
            });
        });
    };
    SolicitacoesRepository.prototype.match = function (idInteresse, aprovacao) {
        return Interesse_1.default.findById(idInteresse).update({ aprovacao: aprovacao });
    };
    return SolicitacoesRepository;
}());
exports.default = SolicitacoesRepository;
