"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var UsuarioBlocklistSchema = new mongoose.Schema({
    codUsuario: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
        }],
    codUsuarioBlock: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
        }],
    dataBloqueio: { type: Date, default: Date.now }
});
exports.default = mongoose.model('UsuarioBlocklist', UsuarioBlocklistSchema);
