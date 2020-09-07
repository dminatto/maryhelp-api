import * as mongoose from 'mongoose';

class DataBase{

    private dbconnection;

    constructor(){}

    createConnection(){
        mongoose.connect(process.env.DATABASE_URL);
        this.looger(process.env.DATABASE_URL);
    }


    looger(uri){
        this.dbconnection = mongoose.connection;
        this.dbconnection.on('connected', () => console.log('moongose está conectado'));
        this.dbconnection.on('error', ereor => console.error.bind(console, 'Erro na conexao: ' + ereor));
    }
}

export default DataBase;