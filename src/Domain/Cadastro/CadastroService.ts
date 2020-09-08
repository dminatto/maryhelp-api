
import usuarioRepository from '../../Infrastructure/Repositorys/UsuarioRepository';
import notificacaoService from './NotificacoesService';
import servicoService from '../Servicos/ServicoService';
import privacidadeFactory from '../../Infrastructure/Factories/TermosUsoFactory'
import Auth from './Auth';

class CadastroService {

    private usuarioRepository: usuarioRepository;
    private servicoService: servicoService;
    private notificacaoService: notificacaoService;

    constructor() {
        this.usuarioRepository = new usuarioRepository();
        this.servicoService = new servicoService();
        this.notificacaoService = new notificacaoService();
    }

    async login(data){

        let usuario = data.user;
        let senha = data.pass;
        
        let dados = await this.usuarioRepository.autenticaUsuario(usuario, senha)
        .then(usuario => { return usuario})
        .catch(err => {return err});

        return Auth.geraToken(dados.id);

    }

    async buscaDadosDoCadastro(id) {

        var dadosCadastro = await this.cadastro(id);
        var dadosEndereco = await this.buscaEndereco(id);
        var dadosServico = await this.servicoService.buscaServicosOferecidosPeloUsuario(id);
        var usuariosBloqueados = await this.buscaUsuariosBloqueados(id);


        var notificacao = await this.usuarioRepository.buscaTodasAsNotificacoesDoUsuario(id)
            .then(notificacoes => {
                return notificacoes;
            })
            .catch(err => { return err });


        return [{
            cadastro: dadosCadastro,
            endereco: dadosEndereco,
            servicosOferecidos: dadosServico,
            usuariosBloqueados: usuariosBloqueados,
            notificacoes: notificacao
        }];

    }

    async cadastro(id) {
        return this.usuarioRepository.detalhaUsuario(id)
            .then(cadastro => { return cadastro; })
            .catch(err => { return err });
    }

    public async criaNovoCadastro(data) {

        let cadastro = await this.criaNovoUsuario(data.cadastro).then(cadastro => {
            return cadastro;
        });


        for (let key in data.endereco) {
            await this.criaNovoEndereco(cadastro.id, data.endereco[key])
        }

        for (let key in data.servicosOferecidos) {
            await this.servicoService.incluiServicoParaUsuario(cadastro.id, data.servicosOferecidos[key])
        }

        await this.notificacaoService.criaNotificacaoDeBoasVindas(cadastro.id);

        return await this.buscaDadosDoCadastro(cadastro.id);

    }

    private criaNovoUsuario(data) {

        return this.usuarioRepository.criaUsuario(data);
    }

    async editaUsuario(id, data) {
        return await this.usuarioRepository.atualizaUsuario(id, data);
    }

    public async buscaEndereco(idCadastro) {

        return await this.usuarioRepository.buscaTodosOsEnderecosDoUsuario(idCadastro)
            .then(enderecos => {
                return enderecos
            })
            .catch(err => { return err });
    }

    public async criaNovoEndereco(idCadastro, data) {

        let request = {
            tipoEndereco: data.tipoEndereco,
            cep: data.cep,
            us: data.uf,
            cidade: data.cidade,
            bairro: data.bairro,
            endereco: data.endereco,
            numero: data.numero,
            codUsuario: idCadastro
        }

        return await this.usuarioRepository.criaEnderecoParaUsuario(request)
            .then(endereco => { return endereco })
            .catch(err => { return err });
    }

    public async editaEndereco(idCadastro, idEndereco, data) {

        let request = {
            tipoEndereco: data.tipoEndereco,
            cep: data.cep,
            us: data.uf,
            cidade: data.cidade,
            bairro: data.bairro,
            endereco: data.endereco,
            numero: data.numero,
            codUsuario: idCadastro
        }

        return await this.usuarioRepository.editaEnderecoUsuario(idEndereco, request)
            .then(endereco => { return endereco })
            .catch(err => { return err });
    }

    public async deletaEndereco(idEndereco) {

        return await this.usuarioRepository.deletaEnderecoUsuario(idEndereco);;
    }

    private async buscaUsuariosBloqueados(idCadastro) {
        var usuariosBloqueados = await this.usuarioRepository.usuariosBloqueados(idCadastro)
            .then(users => { return users })
            .catch(err => { return err });


        var listaBloqueio = new Array;

        for (let key in usuariosBloqueados) {
            let user = await this.usuarioRepository.detalhaUsuario(usuariosBloqueados[key].codUsuario)
                .then(user => { return user })
                .catch(err => { return err });

            listaBloqueio.push({
                _id: usuariosBloqueados[key].id,
                codUsuario: usuariosBloqueados[key].codUsuario,
                nomeCompleto: user.nome + " " + user.sobrenome,
                foto: user.foto,
                dataBloqueio: usuariosBloqueados[key].dataBloqueio,
            });
        }

        return listaBloqueio;
    }

    async bloqueiaCadastro(idUsuario, dados) {

        let request = {
            codUsuario: idUsuario,
            codUsuarioBlock: dados.codUsuarioBlock
        }

        return await this.usuarioRepository.bloqueiaUsuario(request)
            .then(usuario => { return usuario })
            .catch(err => { return err });

    }

    async removeBloqueioCadastro(idBloqueio) {
        return await this.usuarioRepository.desbloqueiaUsuario(idBloqueio)
            .then(r => "Usuário desbloqueado com sucesso!")
            .catch(err => { return err });


    }

    async avaliacoesFeitas(idBloqueio) {
        return await this.usuarioRepository.desbloqueiaUsuario(idBloqueio)
            .then(r => "Usuário desbloqueado com sucesso!")
            .catch(err => { return err });

    }
    async avaliacoesRecebidas(idBloqueio) {
        return await this.usuarioRepository.desbloqueiaUsuario(idBloqueio)
            .then(r => "Usuário desbloqueado com sucesso!")
            .catch(err => { return err });

    }

    politicaDePrivacidade() { 

        let privacidade = new Array;

        privacidade.push(privacidadeFactory.termosDeUso())
        privacidade.push(privacidadeFactory.politicaDePrivacidade())

        return privacidade;
    }
}

export default CadastroService;