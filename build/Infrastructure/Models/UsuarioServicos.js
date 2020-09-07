"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var UsuarioServicosSchema = new mongoose.Schema({
    codUsuario: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
        }],
    codServico: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Servicos'
        }],
    tipoAtendimento: { type: String },
    aceitaPermuta: { type: Boolean },
    valor: { type: Number }
});
exports.default = mongoose.model('UsuarioServicos', UsuarioServicosSchema);
