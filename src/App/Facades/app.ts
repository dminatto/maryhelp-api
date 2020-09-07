import * as express from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import connection from '../../Infrastructure/DataBase/Connection';
import servicoController from '../Controllers/ServicosController';
import usuarioController from '../Controllers/UsuarioController';


class App {

    public app: express.Application;
    private db: connection;
    private servicos: servicoController;
    private usuarios: usuarioController;

    constructor() {
        dotenv.config();
        this.app = express();
        this.middleware();
        this.db = new connection();
        this.db.createConnection();
        this.routes();
        this.servicos = new servicoController();
        this.usuarios = new usuarioController();
    }

    middleware() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    routes() {

        this.app.route('/').get((req, res) => res.status(200).json({ 'message': 'Hello world!' }));
        this.app.route('/privacidade').get((req, res) => this.usuarios.privacidade(req, res));
        this.app.route('/servico').get((req, res) => this.servicos.buscaServicos(req, res));
        this.app.route('/servico').post((req, res) => this.servicos.criaServico(req, res));
        this.app.route('/novo-cadastro').post((req, res) => this.usuarios.criaUsuario(req, res));
        this.app.route('/usuario/:id').get((req, res) => this.usuarios.buscaUsuario(req, res));
        this.app.route('/usuario/:id').put((req, res) => this.usuarios.editaUsuario(req, res))
        this.app.route('/usuario/:id/servicos').post((req, res) => this.servicos.incluiServicoUsuario(req, res));
        this.app.route('/usuario/:id/servicos/:servicoId').put((req, res) => this.servicos.editaServicoUsuario(req, res));
        this.app.route('/usuario/:id/servicos/:servicoId').delete((req, res) => this.servicos.excluiServicoUsuario(req, res)); //testar depois
        this.app.route('/usuario/:id/endereco').post((req, res) => this.usuarios.incluiEndereco(req, res));
        this.app.route('/usuario/:id/endereco/:enderecoId').put((req, res) => this.usuarios.editaEndereco(req, res));
        this.app.route('/usuario/:id/endereco/:enderecoId').delete((req, res) => this.usuarios.excluiEndereco(req, res)); //testar depois
        this.app.route('/usuario/:id/notificacoes/:notificacaoId').put((req, res) => this.usuarios.marcarNotificacaoComoLida(req, res));
        this.app.route('/usuario/:id/block').post((req, res) => this.usuarios.bloqueiaUsuario(req, res));
        this.app.route('/usuario/:id/block/:blockid').delete((req, res) => this.usuarios.deletaBloqueio(req, res));//testar depois
    }
}

export default new App();