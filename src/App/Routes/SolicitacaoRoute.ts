import * as express from 'express';
import * as httpStatus from 'http-status';
import Controller from '../Controllers/SolicitacoesController'

class SolicitacaoRoute {

    private app: express.Application;


    constructor(app) {
        this.app = app;
        this.listaRotas();
    }


    listaRotas() { 


        this.app.route('/solicitacao/:id').get((req, res) => Controller.buscaSolicitacoes(req, res));
        this.app.route('/usuario/:id/solicitacoes').post((req, res) => Controller.criaSolicitacao(req, res));
        
        this.app.route('/solicitacao/:id/atribuir').put((req, res) => Controller.atribuiSolicitacaoParaUsuario(req, res));
        this.app.route('/solicitacao/:id/finalizar').get((req, res) => Controller.finalizacaoSolicitacao(req, res));
        this.app.route('/solicitacao/:id/cancelar').get((req, res) => Controller.cancelaSolicitacao(req, res));

        this.app.route('/solicitacao/:id/chat').get((req, res) => Controller.recuperaHistoricoDoChat(req, res));
        this.app.route('/solicitacao/:id/chat').post((req, res) => Controller.enviaMensagem(req, res));
        this.app.route('/solicitacao/:id/chat/:id/visualizar').get((req, res) => Controller.marcaMensagemComoLida(req, res));

    }
}

export default SolicitacaoRoute;
