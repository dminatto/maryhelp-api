import * as mongoose from "mongoose";

const SolicitacoesSchema = new mongoose.Schema({
    codSolicitante: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
    }],
    codSolicitado: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
    }],
    codServico: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Servico'
    }],
    dataSolicitacao: { type: Date, default: Date.now },
    status: { type: Number, default: 1 },
    ativo: { type: Boolean, default: 1 }
});

export default mongoose.model('Solicitacoes', SolicitacoesSchema);