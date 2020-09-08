import * as express from 'express';

import cadastro from './CadastroRoute';
import servico from './ServicoRoute';
import solicitacao from './SolicitacaoRoute';
import * as fs from 'fs';

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
        this.app.route('/').get((req, res) => res.status(200).json({ 'message': 'Para saber mais sobre os endpoints consulte: https://dminatto.github.io/maryhelp-api/' }));
    }
}

export default SistemaRoute;
