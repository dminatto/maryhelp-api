import modelSolicitacao from '../Models/Solicitacoes';
import modelSolicitacaoAvaliacao from '../Models/SolicitacoesAvaliacoes';
import modelServicosMensagem from '../Models/SolicitacoesMensagens';
import modelInteresse from '../Models/Interesse';

const SOLICITACAO_CANCELADA = 0;
const SOLICITACAO_ABERTA = 1;
const SOLICITACAO_EM_ANDAMENTO = 2;
const SOLICITACAO_FINALIZADA = 3;

class SolicitacoesRepository {

    buscaSolicitacoesSolicitante(idUsuario, statusSolicitacao) {

        return modelSolicitacao.find({ status: statusSolicitacao })
            .where({ codSolicitante: idUsuario });
    }

    buscaSolicitacoesSolicitado(idUsuario, statusSolicitacao) {

        return modelSolicitacao.find({ status: statusSolicitacao })
            .where({ codSolicitado: idUsuario });
    }

    buscaSolicitacoesPorServico(idServico) {

        return modelSolicitacao.find({ codServico: idServico })
            .where({ status: SOLICITACAO_ABERTA });
    }

    buscaSolicitacoesEmAberto() {

        return modelSolicitacao.find({ status: SOLICITACAO_ABERTA })
            .where({ ativo: 1 })
    }

    criaSolicitacao(dados) {
        return modelSolicitacao.create(dados);
    }

    editaSolicitacao(id, dados) {
        return modelSolicitacao.findById(id).update(dados);
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
          //return modelSolicitacaoAvaliacao.find({});
    }

    buscaAvaliacoesGeradas(idUsuario) {
        return modelSolicitacaoAvaliacao.find({codUsuario:idUsuario});
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

    criaInteresse(dados){
        return modelInteresse.create(dados);
    }

    async buscaInteresse(id){
        return modelInteresse.findById(id);
    }

    match(idInteresse, aprovacao){
        return modelInteresse.findById(idInteresse).update({aprovacao: aprovacao});
    }
}

export default SolicitacoesRepository;
