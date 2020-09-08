import * as mongoose from "mongoose";

const InteresseSchema = new mongoose.Schema({
    codSolicitacao: {type: String},
    codSolicitante: {type: String},
    aprovacao: {type:Number, default: 0}
});

export default mongoose.model('Interesse', InteresseSchema);