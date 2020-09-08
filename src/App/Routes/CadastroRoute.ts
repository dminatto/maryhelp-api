import * as express from 'express';
import * as httpStatus from 'http-status';
import Controller from '../Controllers/UsuarioController'


class CadastroRoute {

    private app: express.Application;


    constructor(app) {
        this.app = app;
        this.listaRotas();
    }

    listaRotas() {
        /**
        * @api {post} novo-cadastro Cadastro de usuario
        * @apiVersion 1.0.0
        * @apiName criaUsuario
        * @apiGroup Usuário
        * @apiParamExample {json} Request-Example:
        * {
        * 	"cadastro": {
        *    "nome": "Gabriela",
        *    "sobrenome": "Silva",
        *    "dataNascimento": "11/10/1990",
        *    "usuario": "gabis",
        *    "senha": 1234,
        *    "telefone": "000000000",
        *    "email": "gabi.s@email.com",
        *    "temfilhos": "0",
        *    "foto" : "/.../.../foto.png"
        *    },
        *   "endereco": {
        *       "0": {
        *           "tipoEndereco": "comercial",
        *           "cep": "000000000",
        *           "uf": "SC",
        *           "cidade": "Cidade",
        *           "bairro": "Centro",
        *           "endereco": "rua das laranjeiras",
        *           "numero": "20"
        *       }
        *   },
        *   "servicosOferecidos": {
        *       "0": {
        *           "codServico": "5f556a38363c4a936c0fd74c",
        *           "tipoAtendimento": "Presencial",
        *           "aceitaPermuta": "0",
        *           "valor": "60.00"
        *       },
        *       "1": {
        *           "codServico": "5f556a40363c4a936c0fd74d",
        *           "tipoAtendimento": "Online",
        *           "aceitaPermuta": "1",
        *           "valor": "00.00"
        *       }
        *   }
        * }
        * @apiSuccess (200) {String} data  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   "result": [{
        *       "cadastro": {
        *         "_id": "5f55a5e825a0cfbdfa30b078",
        *         "nome": "Maria",
        *         "sobrenome": "Mercedes",
        *         "dataNascimento": "1990-11-10T02:00:00.000Z",
        *         "usuario": "gabis",
        *         "senha": "4654654",
        *         "telefone": 88888888,
        *         "email": "mariadobairro@email.com",
        *         "dataRegistro": "2020-09-07T03:15:52.703Z",
        *         "__v": 0
        *       },
        *       "endereco": [
        *         {
        *           "codUsuario": [
        *             "5f55a5e825a0cfbdfa30b078"
        *           ],
        *           "_id": "5f55853275214ea4206e38ff",
        *           "tipoEndereco": "residencial",
        *           "cep": 8887777,
        *           "uf": "SC",
        *           "cidade": "Macieira",
        *           "bairro": "Centro",
        *           "endereco": "rua das laranjeiras",
        *           "numero": 100,
        *           "__v": 0
        *         },
        *     ],
        *       "servicosOferecidos": [
        *         {
        *           "_id": "5f55a5e825a0cfbdfa30b07a",
        *           "tipoAtendimento": "Presencial",
        *           "aceitaPermuta": false,
        *           "valor": 60
        *         },
        *         {
        *           "_id": "5f55a5e825a0cfbdfa30b07b",
        *           "tipoAtendimento": "Online",
        *           "aceitaPermuta": true,
        *           "valor": 0
        *         },
        *         {
        *           "_id": "5f55a9a07e521cc12883dc53",
        *           "tipoAtendimento": "Presencial",
        *           "aceitaPermuta": true,
        *           "valor": 25
        *         },
        *         {
        *           "_id": "5f55ae083301e9c3aace36e2"
        *         }
        *       ],
        *       "usuariosBloqueados": [
        *         {
        *           "_id": "5f55b9f5409e7ecbf4ecf98d",
        *           "codUsuario": [
        *             "5f55a5e825a0cfbdfa30b078"
        *           ],
        *           "nomeCompleto": "Maria Mercedes",
        *           "dataBloqueio": "2020-09-07T04:41:25.627Z"
        *         }
        *       ],
        *       "notificacoes": [
        *         {
        *           "codUsuario": [
        *             "5f55a5e825a0cfbdfa30b078"
        *           ],
        *           "lido": true,
        *           "_id": "5f55a5e825a0cfbdfa30b07c",
        *           "descricao": "Bem-vindo ao MaryHelp!",
        *           "__v": 0
        *         }
        *       ],
        *       "avaliacoesFeitas": [],
        *       "avaliacoesRecebidas": [],
        *       "mensagens": []
        *    }
        * ]}
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/novo-cadastro').post((req, res) => Controller.criaUsuario(req, res));

        /**
        * @api {get} usuario/:id Busca usuario
        * @apiVersion 1.0.0
        * @apiName buscaUsuario
        * @apiGroup Usuário
        * @apiParam (parameters) {String} id codigo do usuario
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   "result": [{
        *       "cadastro": {
        *         "_id": "5f55a5e825a0cfbdfa30b078",
        *         "nome": "Maria",
        *         "sobrenome": "Mercedes",
        *         "dataNascimento": "1990-11-10T02:00:00.000Z",
        *         "usuario": "gabis",
        *         "senha": "4654654",
        *         "telefone": 88888888,
        *         "email": "mariadobairro@email.com",
        *         "dataRegistro": "2020-09-07T03:15:52.703Z",
        *         "__v": 0
        *       },
        *       "endereco": [
        *         {
        *           "codUsuario": [
        *             "5f55a5e825a0cfbdfa30b078"
        *           ],
        *           "_id": "5f55853275214ea4206e38ff",
        *           "tipoEndereco": "residencial",
        *           "cep": 8887777,
        *           "uf": "SC",
        *           "cidade": "Macieira",
        *           "bairro": "Centro",
        *           "endereco": "rua das laranjeiras",
        *           "numero": 100,
        *           "__v": 0
        *         },
        *     ],
        *       "servicosOferecidos": [
        *         {
        *           "_id": "5f55a5e825a0cfbdfa30b07a",
        *           "tipoAtendimento": "Presencial",
        *           "aceitaPermuta": false,
        *           "valor": 60
        *         },
        *         {
        *           "_id": "5f55a5e825a0cfbdfa30b07b",
        *           "tipoAtendimento": "Online",
        *           "aceitaPermuta": true,
        *           "valor": 0
        *         },
        *         {
        *           "_id": "5f55a9a07e521cc12883dc53",
        *           "tipoAtendimento": "Presencial",
        *           "aceitaPermuta": true,
        *           "valor": 25
        *         },
        *         {
        *           "_id": "5f55ae083301e9c3aace36e2"
        *         }
        *       ],
        *       "usuariosBloqueados": [
        *         {
        *           "_id": "5f55b9f5409e7ecbf4ecf98d",
        *           "codUsuario": [
        *             "5f55a5e825a0cfbdfa30b078"
        *           ],
        *           "nomeCompleto": "Maria Mercedes",
        *           "dataBloqueio": "2020-09-07T04:41:25.627Z"
        *         }
        *       ],
        *       "notificacoes": [
        *         {
        *           "codUsuario": [
        *             "5f55a5e825a0cfbdfa30b078"
        *           ],
        *           "lido": true,
        *           "_id": "5f55a5e825a0cfbdfa30b07c",
        *           "descricao": "Bem-vindo ao MaryHelp!",
        *           "__v": 0
        *         }
        *       ],
        *       "avaliacoesFeitas": [],
        *       "avaliacoesRecebidas": [],
        *       "mensagens": []
        *    }
        * ]}
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/usuario/:id').get((req, res) => Controller.buscaUsuario(req, res));

        /**
        * @api {put} usuario/:id Edita dados do usuario
        * @apiVersion 1.0.0
        * @apiName editaUsuario
        * @apiGroup Usuário
        *
        * @apiParam (parameters) {String} id codigo do usuario
        * @apiParam (parameters) {String} nome nome do usuario
        * @apiParam (parameters) {String} sobrenome sobrenome do usuario
        * @apiParam (parameters) {Date} dataNascimento cep
        * @apiParam (parameters) {String} usuario usuario
        * @apiParam (parameters) {String} senha senha do usuario
        * @apiParam (parameters) {Numeric} telefone telefone do usuario
        * @apiParam (parameters) {String} email email do usuario
        * @apiParam (parameters) {Boolean} temfilhos se tem filhos
        * 
        * @apiParamExample {json} Request-Example:
        *     {
        *       "nome": "Maria",
        *       "sobrenome": "Mercedes",
        *       "dataNascimento": "11/10/1990",
        *       "usuario": "gabis",
        *       "senha": 4654654,
        *       "telefone": "88888888",
        *       "email": "mariadobairro@email.com",
        *       "temfilhos": "1"
        *     }
        * 
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   "result": "Usuario alterado com sucesso!"
        * }
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/usuario/:id').put((req, res) => Controller.editaUsuario(req, res));


        /**
        * @api {post} usuario/:id/endereco Inclui novo endereco do usuario
        * @apiVersion 1.0.0
        * @apiName incluiEndereco
        * @apiGroup Usuário - Endereço
        *
        * @apiParam (parameters) {String} id codigo do usuario
        * @apiParam (parameters) {String} tipoEndereco tipo de endereço
        * @apiParam (parameters) {Numeric} cep cep
        * @apiParam (parameters) {String} uf uf
        * @apiParam (parameters) {String} cidade cidade
        * @apiParam (parameters) {String} bairro bairro
        * @apiParam (parameters) {String} endereco endereço
        * @apiParam (parameters) {Numeric} numero numero do endereço
        * 
        * @apiParamExample {json} Request-Example:
        *     {
	    *       "tipoEndereco": "residencial",
	    *       "cep": "8887777",
	    *       "uf": "SC",
	    *       "cidade": "Macieira",
	    *       "bairro": "Centro",
	    *       "endereco": "rua das laranjeiras",
	    *       "numero": "100"
        *     }
        * 
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   result": [
        *     "codUsuario": [
        *           "5f55a5e825a0cfbdfa30b078"
        *       ],
        *       "_id": "5f55b4ef72de84c8f06e5cb4",
        *       "tipoEndereco": "comercial",
        *       "cep": 8887777,
        *       "cidade": "A cor da cidade sou eu",
        *       "bairro": "Centro",
        *       "endereco": "rua das laranjeiras",
        *       "numero": 100,
        *       "__v": 0
        * ]}
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/usuario/:id/endereco').post((req, res) => Controller.incluiEndereco(req, res));

        /**
        * @api {put} usuario/:id/endereco/:enderecoId Edita endereço do usuario
        * @apiVersion 1.0.0
        * @apiName editaEndereco
        * @apiGroup Usuário - Endereço
        *
        * @apiParam (parameters) {String} id codigo do usuario
        * @apiParam (parameters) {String} enderecoId codigo do endereço
        * @apiParam (parameters) {String} tipoEndereco tipo de endereço
        * @apiParam (parameters) {Numeric} cep cep
        * @apiParam (parameters) {String} uf uf
        * @apiParam (parameters) {String} cidade cidade
        * @apiParam (parameters) {String} bairro bairro
        * @apiParam (parameters) {String} endereco endereço
        * @apiParam (parameters) {Numeric} numero numero do endereço
        * 
        * @apiParamExample {json} Request-Example:
        *     {
	    *       "tipoEndereco": "residencial",
	    *       "cep": "8887777",
	    *       "uf": "SC",
	    *       "cidade": "Macieira",
	    *       "bairro": "Centro",
	    *       "endereco": "rua das laranjeiras",
	    *       "numero": "100"
        *     }
        * 
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   result": [
        *     "codUsuario": [
        *           "5f55a5e825a0cfbdfa30b078"
        *       ],
        *       "_id": "5f55b4ef72de84c8f06e5cb4",
        *       "tipoEndereco": "comercial",
        *       "cep": 8887777,
        *       "cidade": "A cor da cidade sou eu",
        *       "bairro": "Centro",
        *       "endereco": "rua das laranjeiras",
        *       "numero": 100,
        *       "__v": 0
        * ]}
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/usuario/:id/endereco/:enderecoId').put((req, res) => Controller.editaEndereco(req, res));

        /**
        * @api {put} usuario/:id/endereco/:enderecoId' Exclui endereço do usuário
        * @apiVersion 1.0.0
        * @apiName excluiEndereco
        * @apiGroup Usuário - Endereço
        *
        * @apiParam (parameters) {String} id codigo do usuario
        * @apiParam (parameters) {String} enderecoId codigo do endereço
        * 
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   "result": "Endereço excluido com sucesso!!"
        * }
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/usuario/:id/endereco/:enderecoId').delete((req, res) => Controller.excluiEndereco(req, res)); 

        /**
        * @api {put} usuario/:id/notificacoes/:notificacaoId' Marca notificação como lida
        * @apiVersion 1.0.0
        * @apiName marcarNotificacaoComoLida
        * @apiGroup Usuário - Notificação
        *
        * @apiParam (parameters) {String} id codigo do usuario
        * * @apiParam (parameters) {String} notificacaoId codigo da notificação
        * 
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   "result": "Notificação lida com sucesso!!"
        * }
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/usuario/:id/notificacoes/:notificacaoId').put((req, res) => Controller.marcarNotificacaoComoLida(req, res));

        /**
        * @api {post} usuario/:id/block/ Bloqueia usuario
        * @apiVersion 1.0.0
        * @apiName bloqueiaUsuario
        * @apiGroup Usuário - Lista de Bloqueio
        *
        * @apiParam (parameters) {String} id codigo do usuario
        * 
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   "result": "Usuario bloqueado com sucesso!"
        * }
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/usuario/:id/block').post((req, res) => Controller.bloqueiaUsuario(req, res));
        /**
        * @api {delete} usuario/:id/block/:blockid Retira usuario da lista de bloqueio
        * @apiVersion 1.0.0
        * @apiName deletaBloqueio
        * @apiGroup Usuário - Lista de Bloqueio
        *
        * @apiParam (parameters) {String} id codigo do usuario
        * @apiParam (parameters) {String} blockid codigo do bloqueio
        * 
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   "result": "Usuario desbloqueado com sucesso!"
        * }
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/usuario/:id/block/:blockid').delete((req, res) => Controller.deletaBloqueio(req, res));

        /**
        * @api {get} privacidade Retorna o código de privacidade e termos de uso
        * @apiVersion 1.0.0
        * @apiName privacidade
        * @apiGroup Sistema 
        * 
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *     "result": [
        *       {
        *         "titulo": "Termos de Uso",
        *         "descricao": "Lorem ipsum dolor sit amet...."
        *       },
        *       {
        *         "titulo": "Politica de Privacidade",
        *         "descricao": "Lorem ipsum dolor sit amet..."
        *       }]
        * }
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/privacidade').get((req, res) => Controller.privacidade(req, res));



        /**
        * @api {get} login
        * @apiVersion 1.0.0
        * @apiName logout
        * @apiGroup Sistema
        * @apiParam (parameters) {String} user usuario
        * @apiParam (parameters) {String} pass senha do usuario
        *  @apiParamExample {json} Request-Example:
        * {
        *   "user" : "maria",
        *   "pass" : "1234"
        * }
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   "result": {
        *           "auth": "true",
        *           "token": "gas\douLKÇdassdasdasdASWA+F09DS6501G65AW445265W1feawsrfd.waetgojiszaidfu1FV65SZR4"
        *   }
        * }
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.get('/login', function (req, res) {
            res.status(200).send(Controller.login(req, res));
        });


        /**
        * @api {get} logout
        * @apiVersion 1.0.0
        * @apiName logout
        * @apiGroup Sistema
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   "result": {
        *           "auth": "false",
        *           "token": "null"
        *   }
        * }
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.get('/logout', function (req, res) {
            res.status(200).send({ auth: false, token: null });
        });



    }
}

export default CadastroRoute;