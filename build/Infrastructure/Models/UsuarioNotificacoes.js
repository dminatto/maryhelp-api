"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var UsuarioNotificacoesSchema = new mongoose.Schema({
    codUsuario: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
        }],
    lido: { type: Boolean, default: 0 },
    descricao: { type: String }
});
exports.default = mongoose.model('UsuarioNotificacoes', UsuarioNotificacoesSchema);
