"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var UsuarioEnderecoSchema = new mongoose.Schema({
    codUsuario: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
        }],
    tipoEndereco: { type: String },
    cep: { type: Number },
    uf: { type: String },
    cidade: { type: String },
    bairro: { type: String },
    endereco: { type: String },
    numero: { type: Number }
});
exports.default = mongoose.model('UsuarioEndereco', UsuarioEnderecoSchema);
