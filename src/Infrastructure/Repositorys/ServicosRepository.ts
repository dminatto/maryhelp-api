import model from '../Models/Servicos';
import modelServicos from '../Models/UsuarioServicos';

class ServicosRepository {

    buscaTodosOsServicos(){
        return model.find({});
    }

    async buscaServico(id){
        return model.findById(id);
    }

    async criaCadastroDeServicos(dados){
        return model.create(dados);
    }

    atualizaCadastroDeProduto(id, dados){
        return model.findById(id).update(dados)
    }

    incluiServicoParaUsuario(dados){
        return modelServicos.create(dados);
    }

    editaServicoUsuario(id, dados){
        return modelServicos.findById(id).update(dados);
    }
    
    buscaTodosOsServicosDoUsuario(idUsuario){
        return modelServicos.find({codUsuario: idUsuario});
    }
    
    removeServicoDoUsuario(id){
        return modelServicos.deleteOne(id);
    }


}

export default ServicosRepository;