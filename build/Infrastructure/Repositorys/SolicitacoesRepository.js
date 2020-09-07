"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Solicitacoes_1 = require("../Models/Solicitacoes");
var SolicitacoesAvaliacoes_1 = require("../Models/SolicitacoesAvaliacoes");
var SolicitacoesMensagens_1 = require("../Models/SolicitacoesMensagens");
var SOLICITACAO_CANCELADA = 0;
var SOLICITACAO_ABERTA = 1;
var SOLICITACAO_EM_ANDAMENTO = 2;
var SOLICITACAO_FINALIZADA = 3;
var SolicitacoesRepository = /** @class */ (function () {
    function SolicitacoesRepository() {
    }
    SolicitacoesRepository.prototype.buscaSolicitacoes = function () {
        //SOLICITACAO_EM_ANDAMENTO, SOLICITACAO_FINALIZADA
    };
    SolicitacoesRepository.prototype.buscaSolicitacoesEmAberto = function () { };
    SolicitacoesRepository.prototype.criaSolicitacao = function (dados) {
        return Solicitacoes_1.default.create(dados);
    };
    SolicitacoesRepository.prototype.editaSolicitacao = function (id, dados) {
        return Solicitacoes_1.default.findOneAndUpdate(id, dados);
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
        //  return modelSolicitacaoAvaliacao.find({});
    };
    SolicitacoesRepository.prototype.buscaAvaliacoesGeradas = function (idUsuario) {
        // return modelSolicitacaoAvaliacao.find();
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
    return SolicitacoesRepository;
}());
exports.default = SolicitacoesRepository;
