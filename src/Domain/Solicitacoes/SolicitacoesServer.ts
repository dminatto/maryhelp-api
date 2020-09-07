import solicitacoesRepository from '../../Infrastructure/Repositorys/SolicitacoesRepository';
import usuarioService from '../Cadastro/CadastroService';
import servicoService from '../Servicos/ServicoService';
import { count } from 'console';

const SOLICITACAO_CANCELADA = 0;
const SOLICITACAO_ABERTA = 1;
const SOLICITACAO_EM_ANDAMENTO = 2;
const SOLICITACAO_FINALIZADA = 3;

class SolicitacoesController {

    private repository: solicitacoesRepository;
    private usuarioService: usuarioService;
    private servicoService: servicoService;

    constructor() {
        this.repository = new solicitacoesRepository();
        this.usuarioService = new usuarioService();
        this.servicoService = new servicoService();
    }

    async criaSolicitacao(idUsuario, dados) {

        let request = {
            codSolicitante: idUsuario,
            codSolicitado: dados.codSolicitado,
            codServico: dados.codServico
        }

        return await this.repository.criaSolicitacao(request)
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

    async atribuiSolicitacao(idSolicitacao, data) {
        let request = {
            codSolicitado: data.idSolicitado,
            status: SOLICITACAO_EM_ANDAMENTO
        }

        return await this.repository.editaSolicitacao(idSolicitacao, request)
            .then(solicitacao => {
                //todo: enviar uma notificacao
                return "Solicitacao atribuida com sucesso!"
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

    async cancelaSolicitacao(idSolicitacao) {

        //todo: tratar se a solicitacao está aberta e não tem solicitante

        let request = {
            status: SOLICITACAO_CANCELADA,
            ativo: 0
        }

        return await this.repository.editaSolicitacao(idSolicitacao, request)
            .then(solicitacao => {
                //todo: enviar uma notificacao
                return "Solicitacao cancelada com sucesso!"
            })
            .catch(err => { return err });
    }

    async buscaSolicitacoesDoUsuario(idUsuario) {



        return {
            ativas: [],
            emAndamento: [],
            canceladas: [],
            finalizadas: []
        }
    }

    async buscaTodasSolicitacoesEmAberto() {

        let solicitacoes = await this.repository.buscaSolicitacoesEmAberto()
            .then(solicitacao => { return solicitacao })
            .catch(err => { return err });

        var listaSolicitacoes = new Array;

        console.log(solicitacoes);

        for (let key in solicitacoes) {
            if (this.isEmpty(solicitacoes[key].codSolicitante) || this.isEmpty(solicitacoes[key].codServico)) {
                continue;
            }

            listaSolicitacoes.push(await this.detalhaSolicitacao(solicitacoes[key]));
        }

        return listaSolicitacoes;
    }

    private async detalhaSolicitacao(solicitacao) {

        let user = await this.usuarioService.cadastro(solicitacao.codSolicitante);

        let servico = await this.servicoService.buscarServico(solicitacao.codServico).
            then(servico => {
                console.log('retono do servico')
                console.log(servico)
                return servico;
            }).catch(err => { return err });

        return {
            _id: solicitacao.id,
            codSolicitante: solicitacao.codSolicitante,
            nomeCompleto: user.nome + " " + user.sobrenome,
            foto: user.foto,
            codServico: solicitacao.codServico,
            nomeServico: servico.nome,
            dataSolicitacao: solicitacao.dataSolicitacao
        };
    }

    async buscaAvaliacoesSolicitacoesFeitas(idUsuario) { }

    async buscaAvaliacoesSolicitacoesRecebidas(idUsuario) { }

    async enviarMensagen(idUsuario, idSolicitacao, dados) {

        let request = {
            codSolicitacao: idSolicitacao,
            codUsuario: idUsuario,
            mensagem: dados.mensagem
        };

        return await this.repository.enviaMensagem(request)
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

    isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }

        return true;
    }

}

export default SolicitacoesController;