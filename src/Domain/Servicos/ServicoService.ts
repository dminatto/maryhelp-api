import servicoRepository from '../../Infrastructure/Repositorys/ServicosRepository';

class ServicoService {

    private repository;

    constructor() {
        this.repository = new servicoRepository();
    }

    todos() {
        return this.repository.buscaTodosOsServicos();
    }

    async criar(data) {
        return await this.repository.criaCadastroDeServicos(data);
    }

    async incluiServicoParaUsuario(idCadastro, data) {

        let request = {
            codServico: data.codServico,
            tipoAtendimento: data.tipoAtendimento,
            aceitaPermuta: data.aceitaPermuta,
            valor: data.valor,
            codUsuario: idCadastro
        }

        return await this.repository.incluiServicoParaUsuario(request)
            .then(servico => { return servico })
            .catch(err => { return err });
    }

    async buscarServico(id) {
        return await this.repository.buscarServico(id);
    }

    async buscaServicosOferecidosPeloUsuario(idCadastro) {

        let servicosOfertados = await this.repository.buscaTodosOsServicosDoUsuario(idCadastro)
            .then(listaServicos => { return listaServicos })
            .catch(err => { return err });

        var listaOfertas = new Array;

        for (let key in servicosOfertados) {
            let servico = await this.buscarServico(servicosOfertados[key].codServico).
                then(servico => { return servico; }).catch(err => { return err });

            listaOfertas.push({
                _id: servicosOfertados[key].id,
                nomeServico: servico.nome,
                tipoAtendimento: servicosOfertados[key].tipoAtendimento,
                aceitaPermuta: servicosOfertados[key].aceitaPermuta,
                valor: servicosOfertados[key].valor

            })
        }

        return listaOfertas;
    }

    async editaServicoUsuario(idUsuario, codUsuarioServico, dados) {

        let request = {
            codUsuario: idUsuario,
            codServico: dados.codServico,
            tipoAtendimento: dados.tipoAtendimento,
            aceitaPermuta: dados.aceitaPermuta,
            valor: dados.valor
        }

        return await this.repository.editaServicoUsuario(codUsuarioServico, request);
    }


    async apagaServicoUsuario(codUsuarioServico) {
        return await this.repository.removeServicoDoUsuario(codUsuarioServico);
     }
}

export default ServicoService;