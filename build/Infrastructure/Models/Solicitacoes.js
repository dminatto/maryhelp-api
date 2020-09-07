"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var SolicitacoesSchema = new mongoose.Schema({
    codSolicitante: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
        }],
    codSolicitado: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
        }],
    codServico: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Servico'
        }],
    dataSolicitacao: { type: Date, default: Date.now },
    status: { type: Number, default: 1 },
    ativo: { type: Boolean, default: 1 }
});
exports.default = mongoose.model('Solicitacoes', SolicitacoesSchema);
