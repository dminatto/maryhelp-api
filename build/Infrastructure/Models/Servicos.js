"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var ServicosSchema = new mongoose.Schema({
    nome: { type: String },
    ativo: { type: Boolean }
});
exports.default = mongoose.model('Servicos', ServicosSchema);
