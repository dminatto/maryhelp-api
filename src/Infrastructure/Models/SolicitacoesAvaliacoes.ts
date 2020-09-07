import * as mongoose from "mongoose";

const SolicitacoesAvaliacoesSchema = new mongoose.Schema({
    codSolicitacao: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Solicitacao'
    }],
    codUsuario: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
    }],
    dataAvaliacao: {type: Date, default:Date.now},
    nota: {type:Number},
    observacao: {type: String}
});

export default mongoose.model('SolicitacoesAvaliacoes', SolicitacoesAvaliacoesSchema);