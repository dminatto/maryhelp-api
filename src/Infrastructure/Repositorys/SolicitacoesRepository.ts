import modelSolicitacao from '../Models/Solicitacoes';
import modelSolicitacaoAvaliacao from '../Models/SolicitacoesAvaliacoes';
import modelServicosMensagem from '../Models/SolicitacoesMensagens';

const SOLICITACAO_CANCELADA = 0;
const SOLICITACAO_ABERTA = 1;
const SOLICITACAO_EM_ANDAMENTO = 2;
const SOLICITACAO_FINALIZADA = 3;

class SolicitacoesRepository {

    buscaSolicitacoes() {
        //SOLICITACAO_EM_ANDAMENTO, SOLICITACAO_FINALIZADA

    }

    buscaSolicitacoesEmAberto() { }

    criaSolicitacao(dados) {
        return modelSolicitacao.create(dados);
    }

    editaSolicitacao(id, dados) {
        return modelSolicitacao.findOneAndUpdate(id, dados);
    }

    cancelaSolicitacao(id) {
        return modelSolicitacao.findById(id).update({ status: SOLICITACAO_CANCELADA });
    }

    finalizaSolicitacao(id) {
        return modelSolicitacao.findById(id).update({ status: SOLICITACAO_FINALIZADA });
    }

    registraAvaliacao(dados) {
        return modelSolicitacaoAvaliacao.create(dados);
    };

    editaAvaliacao(id, dados) {
        return modelSolicitacaoAvaliacao.findById(id).update(dados);
    };

    buscaAvaliacoesRecebidas(idUsuario) {
        //  return modelSolicitacaoAvaliacao.find({});
    }

    buscaAvaliacoesGeradas(idUsuario) {
        // return modelSolicitacaoAvaliacao.find();
    }

    enviaMensagem(dados) {
        return modelServicosMensagem.create(dados)
    }

    lerMensagem(id) {
        return modelServicosMensagem.findById(id).update({ lido: 1 });
    }

    buscaHistoricoDeMensagens(idSolicitacao) {
        return modelServicosMensagem.find({ idSolicitacao: idSolicitacao });
    }
}

export default SolicitacoesRepository;
