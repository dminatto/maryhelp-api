"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var SolicitacoesMensagensSchema = new mongoose.Schema({
    codSolicitacao: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Solicitacao'
        }],
    codUsuario: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
        }],
    dataEnvio: { type: Date, default: Date.now },
    lido: { type: Boolean, default: 0 },
    mensagem: { type: String }
});
exports.default = mongoose.model('SolicitacoesMensagens', SolicitacoesMensagensSchema);
