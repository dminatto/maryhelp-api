"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var SolicitacoesAvaliacoesSchema = new mongoose.Schema({
    codSolicitacao: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Solicitacao'
        }],
    codUsuario: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
        }],
    dataAvaliacao: { type: Date, default: Date.now },
    nota: { type: Number },
    observacao: { type: String }
});
exports.default = mongoose.model('SolicitacoesAvaliacoes', SolicitacoesAvaliacoesSchema);
