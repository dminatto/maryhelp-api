import * as express from 'express';
import * as httpStatus from 'http-status';
import Controller from '../Controllers/UsuarioController'


class CadastroRoute {

    private app: express.Application;


    constructor(app) {
        this.app = app;
        this.listaRotas();
    }


    listaRotas() {

        this.app.route('/novo-cadastro').post((req, res) => Controller.criaUsuario(req, res));
        this.app.route('/usuario/:id').get((req, res) => Controller.buscaUsuario(req, res));
        this.app.route('/usuario/:id').put((req, res) => Controller.editaUsuario(req, res))
        this.app.route('/usuario/:id/endereco').post((req, res) => Controller.incluiEndereco(req, res));
        this.app.route('/usuario/:id/endereco/:enderecoId').put((req, res) => Controller.editaEndereco(req, res));
        this.app.route('/usuario/:id/endereco/:enderecoId').delete((req, res) => Controller.excluiEndereco(req, res)); //testar depois
        this.app.route('/usuario/:id/notificacoes/:notificacaoId').put((req, res) => Controller.marcarNotificacaoComoLida(req, res));
        this.app.route('/usuario/:id/block').post((req, res) => Controller.bloqueiaUsuario(req, res));
        this.app.route('/usuario/:id/block/:blockid').delete((req, res) => Controller.deletaBloqueio(req, res));//testar depois
        this.app.route('/privacidade').get((req, res) => Controller.privacidade(req, res));
    }
}

export default CadastroRoute;