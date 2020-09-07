import * as mongoose from "mongoose";

const UsuarioServicosSchema = new mongoose.Schema({
    codUsuario: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
    }],
    codServico: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Servicos'
    }],
    tipoAtendimento: {type: String},
    aceitaPermuta: {type: Boolean},
    valor: {type: Number}

});

export default mongoose.model('UsuarioServicos', UsuarioServicosSchema);