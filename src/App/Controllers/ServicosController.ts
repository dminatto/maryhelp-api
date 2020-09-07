import service from '../../Domain/Servicos/ServicoService';

class ServicosController {

    private service;

    constructor() {
        this.service = new service();
    }


    buscaServicos(req, res) {
        return this.service.todos()
            .then(servicos => res.status(200).json({ 'result': servicos }))
            .catch(err => res.status(400).json({ 'result': err }));
    }

    criaServico(req, res) {
        return this.service.criar(req.body)
            .then(servico => res.status(200).json({ 'result': servico }))
            .catch(err => res.status(400).json({ 'result': err }));
    }


    async incluiServicoUsuario(req, res) {
        return await this.service.incluiServicoParaUsuario(req.params.id, req.body)
            .then(servico => res.status(200).json({ 'result': "Serviço incluso com sucesso!" }))
            .catch(err => res.status(400).json({ 'result': err }));
    }

    async editaServicoUsuario(req, res) {
        return await this.service.editaServicoUsuario(req.params.id, req.params.servicoId, req.body)
            .then(servico => res.status(200).json({ 'result': "Serviço editado com sucesso!" }))
            .catch(err => res.status(400).json({ 'result': err }));
    }

    async excluiServicoUsuario(req, res) {
        return await this.service.apagaServicoUsuario(req.params.servicoId)
            .then(servico => res.status(200).json({ 'result': "Serviço excluido com sucesso!" }))
            .catch(err => res.status(400).json({ 'result': err }));
    }

}

export default new ServicosController();