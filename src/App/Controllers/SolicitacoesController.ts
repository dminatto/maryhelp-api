import service from '../../Domain/Solicitacoes/SolicitacoesServer';

class SolicitacoesController {

    private service;

    constructor() {
        this.service = new service();
    }

    async buscaSolicitacoes(req, res) {
        return await this.service.buscaSolicitacoesDoUsuario(req.params.id)
            .then(solicitacao => res.status(200).json({ 'result': solicitacao }))
            .catch(err => res.status(400).json({ 'result': err }));
    }

    async buscaSolicitacoesEmAberto(req, res) {
        let solicitacoes = await this.service.buscaTodasSolicitacoesEmAberto(req.params.id);
        return res.status(200).json({ 'result': solicitacoes });
    }

    async criaSolicitacao(req, res) {
        let solicitacao = await this.service.criaSolicitacao(req.params.id, req.body)
        return res.status(200).json({ 'result': solicitacao });
    }

    async atribuiSolicitacaoParaUsuario(req, res) {
        return await this.service.atribuiSolicitacao(req.params.id, req.body)
            .then(solicitacao => res.status(200).json({ 'result': "Solicitação atribuida com sucesso" }))
            .catch(err => res.status(400).json({ 'result': err }));
    }

    async finalizacaoSolicitacao(req, res) {
        return await this.service.finalizaSolicitacao(req.params.id)
            .then(solicitacao => res.status(200).json({ 'result': "Solicitação finalizada com sucesso" }))
            .catch(err => res.status(400).json({ 'result': err }));
    }

    async cancelaSolicitacao(req, res) {
        return await this.service.cancelaSolicitacao(req.params.id)
            .then(solicitacao => res.status(200).json({ 'result': "Solicitação cancelada com sucesso" }))
            .catch(err => res.status(400).json({ 'result': err }));
    }


    async recuperaHistoricoDoChat(req, res) {
        return await this.service.historicoDoChat(req.params.id)
            .then(solicitacao => res.status(200).json({ 'result': solicitacao }))
            .catch(err => res.status(400).json({ 'result': err }));
    }

    async enviaMensagem(req, res) {
        return await this.service.enviarMensagen(req.params.id, req.body)
            .then(solicitacao => res.status(200).json({ 'result': solicitacao }))
            .catch(err => res.status(400).json({ 'result': err }));
    }


    async marcaMensagemComoLida(req, res) {
        return await this.service.lerMensagem(req.params.idMensagem)
            .then(solicitacao => res.status(200).json({ 'result': "Mensagem lida!" }))
            .catch(err => res.status(400).json({ 'result': err }));
    }
}

export default new SolicitacoesController();
