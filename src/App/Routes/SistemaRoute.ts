import * as express from 'express';

import cadastro from './CadastroRoute';
import servico from './ServicoRoute';
import solicitacao from './SolicitacaoRoute';

class SistemaRoute {

    private app: express.Application;
    private rotasCadastro : cadastro;
    private rotasServico : servico;
    private rotasSolicitacao : solicitacao;

    constructor(app) {


        this.app = app;
        this.rotasCadastro = new cadastro(this.app);
        this.rotasServico = new servico(this.app);
        this.rotasSolicitacao = new solicitacao(this.app);
        this.listaRotas();
    }


    listaRotas() { 

        this.app.route('/').get((req, res) => res.status(200).json({ 'message': 'Hello world!' }));
        

    }
}

export default SistemaRoute;
