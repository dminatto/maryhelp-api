"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    dataNascimento: { type: Date },
    usuario: { type: String, required: true },
    senha: { type: String, required: true },
    foto: { type: String },
    miniBio: { type: String },
    telefone: { type: Number },
    email: { type: String, required: true },
    temFilhos: { type: Boolean },
    dataRegistro: { type: Date, default: Date.now }
});
exports.default = mongoose.model('Usuario', UsuarioSchema);
