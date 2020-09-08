import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import caminhoRotas from '../Routes/SistemaRoute';

import connection from '../../Infrastructure/DataBase/Connection';


class App {

    public app: express.Application;
    private db: connection;
    private routes : caminhoRotas;

    constructor() {
        dotenv.config();
        this.app = express();
        this.middleware();
        this.dataBaseConnection();
        this.routes = new caminhoRotas(this.app);
        this.routes.listaRotas();

    }

    middleware() {
       // this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    dataBaseConnection() {
        this.db = new connection();
        this.db.createConnection();
    }

    closeDataBaseConnection(message, callback) {
        this.db.closeConnection(message, () => callback());
    }
}

export default new App();
