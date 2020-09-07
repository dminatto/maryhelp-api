import * as mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: true},
    dataNascimento: {type: Date},
    usuario: {type: String, required: true},
    senha: {type: String, required: true},
    foto: {type: String},
    miniBio: {type: String},
    telefone: {type: Number},
    email:  {type: String, required: true},
    temFilhos: {type: Boolean},
    dataRegistro: {type: Date, default:Date.now}
});

export default mongoose.model('Usuario', UsuarioSchema);