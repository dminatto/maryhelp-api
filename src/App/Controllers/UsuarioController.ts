import cadastroService from '../../Domain/Cadastro/CadastroService';
import notificacoes from '../../Domain/Cadastro/NotificacoesService';

class UsuarioController {

    private service: cadastroService;

    private notificacao: notificacoes;

    constructor() {
        this.service = new cadastroService();
        this.notificacao = new notificacoes();
    }

    async buscaUsuario(req, res) {
        let cadastro = await this.service.buscaDadosDoCadastro(req.params.id)
        return res.status(200).json({ 'result': cadastro });
    }

    async criaUsuario(req, res) {
        let cadastro = await this.service.criaNovoCadastro(req.body)
        return res.status(200).json({ 'result': cadastro });
    }

    async editaUsuario(req, res) {
        await this.service.editaUsuario(req.params.id, req.body)
        let cadastro = await this.service.buscaDadosDoCadastro(req.params.id)
        return res.status(200).json({ 'result': cadastro });
    }

    async incluiEndereco(req, res) {
        let cadastro = await this.service.criaNovoEndereco(req.params.id, req.body)
        return res.status(200).json({ 'result': cadastro });
    }

    async editaEndereco(req, res) {
        let cadastro = await this.service.editaEndereco(req.params.id, req.params.enderecoId, req.body)
        return res.status(200).json({ 'result': cadastro });
    }

    async excluiEndereco(req, res) {
        return await this.service.deletaEndereco(req.params.enderecoId)
            .then(servico => res.status(200).json({ 'result': "Endereço excluido com sucesso!" }))
            .catch(err => res.status(400).json({ 'result': err }));
    }

    async marcarNotificacaoComoLida(req, res) {
        let cadastro = await this.notificacao.leNotificacao(req.params.notificacaoId);
        return res.status(200).json({ 'result': "Notificação lida com sucesso!" });
    }

    async bloqueiaUsuario(req, res) {
        let cadastro = await this.service.bloqueiaCadastro(req.params.id, req.body);
        return res.status(200).json({ 'result': cadastro });
    }

    async deletaBloqueio(req, res) {
        let cadastro = await this.service.removeBloqueioCadastro(req.params.blockid);
        return res.status(200).json({ 'result': cadastro });
    }

    privacidade(req, res) {
        return res.status(200).json({ 'result': this.service.politicaDePrivacidade() });
    }
}

export default new UsuarioController();