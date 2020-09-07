import * as mongoose from "mongoose";

const UsuarioNotificacoesSchema = new mongoose.Schema({
    codUsuario: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
    }],
    lido: {type: Boolean, default: 0},
    descricao: {type: String}

});

export default mongoose.model('UsuarioNotificacoes', UsuarioNotificacoesSchema);