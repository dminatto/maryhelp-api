"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var TipoAtendimentoSchema = new mongoose.Schema({
    descricao: { type: Number },
    ativo: { type: Boolean }
});
exports.default = mongoose.model('TipoAtendimento', TipoAtendimentoSchema);
