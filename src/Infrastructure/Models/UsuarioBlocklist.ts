import * as mongoose from "mongoose";

const UsuarioBlocklistSchema = new mongoose.Schema({
    codUsuario: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
    }],
    codUsuarioBlock: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
    }],
    dataBloqueio: {type: Date, default:Date.now}
});

export default mongoose.model('UsuarioBlocklist', UsuarioBlocklistSchema);