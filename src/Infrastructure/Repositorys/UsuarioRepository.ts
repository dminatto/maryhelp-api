import modelUsuario from '../Models/Usuario';
import modelEndereco from '../Models/UsuarioEndereco';
import modelNotificacoes from '../Models/UsuarioNotificacoes';
import modelBlocklist from '../Models/UsuarioBlocklist';

class UsuarioRepository {

    buscaTodosOsUsuarios(){
        return modelUsuario.find({});
    }

    detalhaUsuario(id){
       return modelUsuario.findById(id)
    }

    criaUsuario(dados){
        return modelUsuario.create(dados);
    }

    async atualizaUsuario(id, dados){
        return modelUsuario.findById(id).update(dados);
    }

    deletaUsuario(id) {
        return modelUsuario.deleteOne(id)
    }

    async criaEnderecoParaUsuario(dados){
        return modelEndereco.create(dados);
    }

    editaEnderecoUsuario(id, dados){
        return modelEndereco.findById(id).update(dados);
    }

    deletaEnderecoUsuario(id){
        return modelEndereco.deleteOne(id);
    }


    buscaTodosOsEnderecosDoUsuario(idUsuario){
        return modelEndereco.find({codUsuario: idUsuario})
    }

    criaNotificacao(dados){
        return modelNotificacoes.create(dados);
    }

    buscaTodasAsNotificacoesDoUsuario(id){
        return modelNotificacoes.find({codUsuario : id})
    }

    marcaNotificacaoComoLida(id){
        return modelNotificacoes.findById(id).update({lido: 1});
    }

    bloqueiaUsuario(dados){
        return modelBlocklist.create(dados);
    }

    desbloqueiaUsuario(id){
        return modelBlocklist.deleteOne(id);
    }

    usuariosBloqueados(id){
        return modelBlocklist.find({codUsuario: id});
    }
}

export default UsuarioRepository;
