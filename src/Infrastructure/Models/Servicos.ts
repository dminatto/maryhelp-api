import * as mongoose from "mongoose";

const ServicosSchema = new mongoose.Schema({
    nome: {type: String},
    ativo: {type: Boolean}
});

export default mongoose.model('Servicos', ServicosSchema);