import * as mongoose from "mongoose";

const UsuarioEnderecoSchema = new mongoose.Schema({
    codUsuario: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
    }],
    tipoEndereco: {type: String},
    cep: {type: Number},
    uf: {type: String},
    cidade: {type: String},
    bairro: {type: String},
    endereco:  {type: String},
    numero: {type: Number}
});

export default mongoose.model('UsuarioEndereco', UsuarioEnderecoSchema);