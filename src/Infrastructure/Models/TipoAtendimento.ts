import * as mongoose from "mongoose";

const TipoAtendimentoSchema = new mongoose.Schema({
    descricao: {type: Number},
    ativo: {type: Boolean}
});

export default mongoose.model('TipoAtendimento', TipoAtendimentoSchema);