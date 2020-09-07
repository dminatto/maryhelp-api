import solicitacoesRepository from '../../Infrastructure/Repositorys/SolicitacoesRepository';

class SolicitacoesController {

    private repository;

    constructor() {
        this.repository = new solicitacoesRepository();
    }

    async criaSolicitacao(dados) {
        return await this.repository.criaSolicitacao(dados)
            .then(solicitacao => { return solicitacao })
            .catch(err => { return err });
    }

    async editaSolicitacao(idUsuario, idSolicitacao, dados) {

        //todo: tratar se a solicitacao está aberta e não tem solicitante

        let request = {
            codSolicitante: idUsuario,
            codServico: dados.codServico,
            status: dados.status,
            ativo: dados.ativo
        }

        return await this.repository.editaSolicitacao(idSolicitacao, request)
            .then(solicitacao => { return solicitacao })
            .catch(err => { return err });
    }

    async atribuiSolicitacao(idSolicitante, idSolicitacao, idSolicitado) {
        let request = {
            codSolicitante: idSolicitante,
            codSolicitado: idSolicitado,
            status: this.repository.SOLICITACAO_EM_ANDAMENTO
        }

        return await this.repository.editaSolicitacao(idSolicitacao, request)
            .then(solicitacao => {
                //todo: enviar uma notificacao
                return solicitacao
            })
            .catch(err => { return err });
    }

    async finalizaSolicitacao(idSolicitacao) {

        return await this.repository.finalizaSolicitacao(idSolicitacao)
            .then(solicitacao => {
                //todo: enviar uma notificacao
                return "Solicitacao finalizada com sucesso!"
            })
            .catch(err => { return err });
    }

    async buscaSolicitacoesdoUsuario(idUsuario) { }

    async buscaAvaliacoesSolicitacoesFeitas(idUsuario) { }

    async buscaAvaliacoesSolicitacoesRecebidas(idUsuario) { }

    async enviarMensagen(idUsuario, idSolicitacao, dados) {

        let request = {
            codSolicitacao: idSolicitacao,
            codUsuario: idUsuario,
            mensagem: dados.mensagem
        };

        return await this.repository.enviaMensagem(idSolicitacao, request)
            .then(mensagem => { return mensagem })
            .catch(err => { return err });
    }

    async lerMensagem(idMensagem) {
        return await this.repository.lerMensagem(idMensagem)
            .then(mensagem => { return mensagem })
            .catch(err => { return err });
    }

    async historicoDoChat(idSolicitacao) {
        return await this.repository.buscaHistoricoDeMensagens(idSolicitacao)
            .then(mensagem => { return mensagem })
            .catch(err => { return err });
    }

    async historicoDeMensagen() {

        //todo: pegar a mensagem mais recente de cada solicitacao em aberto e listar;

    }

}

export default SolicitacoesController;