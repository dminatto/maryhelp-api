import * as mongoose from "mongoose";

const SolicitacoesMensagensSchema = new mongoose.Schema({
    codSolicitacao: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Solicitacao'
    }],
    codUsuario: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
    }],
    dataEnvio: {type: Date, default:Date.now},
    mensagem: {type: String}
});

export default mongoose.model('SolicitacoesMensagens', SolicitacoesMensagensSchema);