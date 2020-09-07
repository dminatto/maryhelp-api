import * as mongoose from 'mongoose';

class DataBase{

    private dbConnection;

    constructor(){}

    createConnection(){

        if (process.env.NODE_ENV == 'production') {
            mongoose.connect(process.env.DATABASE_URL);
            this.logger(process.env.DATABASE_URL);
          }
          else {
            mongoose.connect(process.env.DB_URI);
            this.logger(process.env.DB_URI);
      
          }
    }


    logger(uri) {
        this.dbConnection = mongoose.connection;
        this.dbConnection.on('connected', () =>
          console.log('Mongoose está conectado ao ' + uri),
        );
        this.dbConnection.on('error', error =>
          console.error.bind(console, 'Erro na conexão: ' + error),
        );
        this.dbConnection.on('disconnected', () =>
          console.log('Mongoose está desconectado do ' + uri),
        );
      }
    
      closeConnection(message, callback) {
        this.dbConnection.close(() => {
          console.log('Mongoose foi desconectado pelo: ' + message);
          callback();
        });
      }
}

export default DataBase;