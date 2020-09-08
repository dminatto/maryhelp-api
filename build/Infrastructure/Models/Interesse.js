"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var InteresseSchema = new mongoose.Schema({
    codSolicitacao: { type: String },
    codSolicitante: { type: String },
    aprovacao: { type: Number, default: 0 }
});
exports.default = mongoose.model('Interesse', InteresseSchema);
