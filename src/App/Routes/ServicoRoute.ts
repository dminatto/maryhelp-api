import * as express from 'express';
import * as httpStatus from 'http-status';
import Controller from '../Controllers/ServicosController'

class ServicoRoute { 

    private app: express.Application;

    constructor(app) {
        this.app = app;
        this.listaRotas();
    }

    listaRotas() {
        this.app.route('/servico').get((req, res) => Controller.buscaServicos(req, res));
        this.app.route('/servico').post((req, res) => Controller.criaServico(req, res));
        this.app.route('/usuario/:id/servicos').post((req, res) => Controller.incluiServicoUsuario(req, res));
        this.app.route('/usuario/:id/servicos/:servicoId').put((req, res) => Controller.editaServicoUsuario(req, res));
        this.app.route('/usuario/:id/servicos/:servicoId').delete((req, res) => Controller.excluiServicoUsuario(req, res)); //testar depois
    }


}

export default ServicoRoute;