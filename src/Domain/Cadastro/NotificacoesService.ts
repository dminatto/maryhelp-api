import usuarioRepository from '../../Infrastructure/Repositorys/UsuarioRepository';

class NotificacoesService {

    private repository;

    constructor() {
        this.repository = new usuarioRepository();
    }

    async criaNotificacaoDeBoasVindas(idUsuario) {
        this.repository.criaNotificacao({
            codUsuario: idUsuario,
            descricao: "Bem-vindo ao MaryHelp!"
        })
    }

    async leNotificacao(id) {
       return await this.repository.marcaNotificacaoComoLida(id);
    }

}

export default NotificacoesService;