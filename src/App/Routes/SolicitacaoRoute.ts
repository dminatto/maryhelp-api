import * as express from 'express';
import * as httpStatus from 'http-status';
import Controller from '../Controllers/SolicitacoesController'

class SolicitacaoRoute {

    private app: express.Application;

    constructor(app) {
        this.app = app;
        this.listaRotas();
    }

    listaRotas() {

        /**
         * @api {get} solicitacao Busca todas as solicitações em aberto
         * @apiVersion 1.0.0
         * @apiName buscaSolicitacoesEmAberto
         * @apiGroup Solicitação
         *
         * @apiParam (parameters) {String} id Solicitacao Id
         *
         * @apiSuccess (200) {String} data  Ok
         * @apiSuccessExample Success-Response:
         * {
         *   "result": [
         *       {
         *       "_id": "5f56a00b9c1547586b69b917",
         *       "codSolicitante": [
         *           "5f55a5e825a0cfbdfa30b078"
         *       ],
         *       "nomeCompleto": "Maria Mercedes",
         *       "codServico": [
         *           "5f556a38363c4a936c0fd74c"
         *       ],
         *       "dataSolicitacao": "2020-09-07T21:03:07.464Z"
         *       }
         *   ]}
         *
         * @apiError UserNotFound The id of the User was not found.
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "UseNortFound"
         *     }
         */
        this.app.route('/solicitacao').get((req, res) => Controller.buscaSolicitacoesEmAberto(req, res));

        /**
        * @api {get} usuario/:id/solicitacoes Busca solicitação
        * @apiVersion 1.0.0
        * @apiName buscaSolicitacoes
        * @apiGroup Solicitação
        * @apiSuccessExample Success-Response:
        * {
        *   "result": [{
        *        "_id": "5f56a00b9c1547586b69b917",
        *        "codSolicitante": [
        *            "5f55a5e825a0cfbdfa30b078"
        *        ],
        *        "nomeCompleto": "Maria Mercedes",
        *        "codServico": [
        *            "5f556a38363c4a936c0fd74c"
        *        ],
        *        "dataSolicitacao": "2020-09-07T21:03:07.464Z"
        *    },
        * ]}
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/usuario/:id/solicitacoes').get((req, res) => Controller.buscaSolicitacoes(req, res));

        /**
        * @api {get} solicitacoes/servico/:idServico Busca solicitação por serviço
        * @apiVersion 1.0.0
        * @apiName buscaSolicitacoesPorServico
        * @apiGroup Solicitação
        * @apiSuccessExample Success-Response:
        * {
        *   "result": [{
        *        "_id": "5f56a00b9c1547586b69b917",
        *        "codSolicitante": [
        *            "5f55a5e825a0cfbdfa30b078"
        *        ],
        *        "nomeCompleto": "Maria Mercedes",
        *        "codServico": [
        *            "5f556a38363c4a936c0fd74c"
        *        ],
        *        "dataSolicitacao": "2020-09-07T21:03:07.464Z"
        *    },
        * ]}
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
       this.app.route('solicitacoes/servico/:idServico').get((req, res) => Controller.buscaSolicitacoesPorServico(req, res));

         /**
        * @api {post} usuario/:id/solicitacoes Cadastra solicitação
        * @apiVersion 1.0.0
        * @apiName criaSolicitacao
        * @apiGroup Solicitação
        *
        * @apiParam (parameters) {String} id id do usuario
        * @apiParam (parameters) {String} codSolicitado Código do serviço
        * @apiParam (parameters) {String} codServico Código do serviço
        * 
        * @apiParamExample {json} Request-Example:
        *     {
        *       "codSolicitado": "5f568faa13f5824934eadf1a",
	            "codServico": "5f556a38363c4a936c0fd74c"
        *     }
        *
        * @apiSuccess (200) {String} data  Ok
        * @apiSuccessExample Success-Response:
        * {
        *  "result": {
        *   "codSolicitante": [
        *       "5f55a5e825a0cfbdfa30b078"
        *       ],
        *       "codSolicitado": [
        *       "5f568faa13f5824934eadf1a"
        *       ],
        *       "codServico": [
        *       "5f556a38363c4a936c0fd74c"
        *       ],
        *       "status": 1,
        *       "ativo": true,
        *       "_id": "5f56a00b9c1547586b69b917",
        *       "dataSolicitacao": "2020-09-07T21:03:07.464Z",
        *       "__v": 0
        *  ]}
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/usuario/:id/solicitacoes').post((req, res) => Controller.criaSolicitacao(req, res));

        /**
        * @api {put} solicitacao/:id/atribuir Atribui solicitação para usuario
        * @apiVersion 1.0.0
        * @apiName atribuiSolicitacaoParaUsuario
        * @apiGroup Solicitação
        *
        * @apiParam (parameters) {String} id id solicitação
        * * @apiParam (parameters) {String} idSolicitado usuario que vai atender a solicitação
        * @apiParamExample {json} Request-Example:
        * {
        *   "idSolicitado" : "5f55a5e825a0cfbdfa30b078"
        * }        
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   "result": "Solicitação atribuida com sucesso!"
        * }
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/solicitacao/:id/atribuir').put((req, res) => Controller.atribuiSolicitacaoParaUsuario(req, res));

         /**
        * @api {get} solicitacao/:id/finalizar Finaliza solicitação
        * @apiVersion 1.0.0
        * @apiName finalizacaoSolicitacao
        * @apiGroup Solicitação
        * @apiParam (parameters) {String} id id solicitação
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   "result": "Solicitação finalizada com sucesso"
        * }
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/solicitacao/:id/finalizar').get((req, res) => Controller.finalizacaoSolicitacao(req, res));

        /**
        * @api {get} solicitacao/:id/finalizar Cancela solicitação
        * @apiVersion 1.0.0
        * @apiName cancelaSolicitacao
        * @apiGroup Solicitação
        *
        * @apiParam (parameters) {String} id id solicitação
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   "result": "Solicitação cancelada com sucesso"
        * }
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/solicitacao/:id/cancelar').get((req, res) => Controller.cancelaSolicitacao(req, res));


        /**
        * @api {get} solicitacao/:id/chat Busca histórico de mensagens
        * @apiVersion 1.0.0
        * @apiName recuperaHistoricoDoChat
        * @apiGroup Solicitação - Mensagem
        *
        * @apiParam (parameters) {String} id id da mensagem
        * @apiSuccess (200) {String} data  Ok
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/solicitacao/:id/chat').get((req, res) => Controller.recuperaHistoricoDoChat(req, res));

        /**
        * @api {post} solicitacao/:id/chat Envia mensagem
        * @apiVersion 1.0.0
        * @apiName enviaMensagem
        * @apiGroup Solicitação - Mensagem
        *
        * @apiParam (parameters) {String} id id solicitação
        * @apiSuccess (200) {String} data  Ok
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/solicitacao/:id/chat').post((req, res) => Controller.enviaMensagem(req, res));

        /**
        * @api {get} solicitacao/:id/chat/:idMensagem/visualizar Marca mensagem como lida
        * @apiVersion 1.0.0
        * @apiName marcaMensagemComoLida
        * @apiGroup Usuario - Notificação
        *
        * @apiParam (parameters) {String} id codigo do usuario
        * @apiParam (parameters) {String} idMensagem codigo da mensagem
        * 
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   "result": "Serviço lida!""
        * }
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/solicitacao/:id/chat/:idMensagem/visualizar').get((req, res) => Controller.marcaMensagemComoLida(req, res));


        /**
        * @api {post} solicitacao/registraInteresse Demonstra interesse em ajudar
        * @apiVersion 1.0.0
        * @apiName sinalizaInteresse
        * @apiGroup Usuario - Solicitacao
        *
        * @apiParam (parameters) {String} codSolicitacao codigo da solicitacao
        * @apiParam (parameters) {String} codSolicitante codigo do usuario interessado
        * @apiParamExample {json} Request-Example:
        * {
        *   "codSolicitacao" : "5f55a5e825a0cfbdfa30b078",
        *   "codSolicitante" : "5f55a5e825a0cfbdfa30b078"
        * }
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   "result": "Interesse registrado com sucesso"
        * 
        * }
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/solicitacao/registraInteresse').post((req, res) => Controller.sinalizaInteresse(req, res));

         /**
        * @api {get} interesse/:id/aprova Aprova interesse
        * @apiVersion 1.0.0
        * @apiName marcaMensagemComoLida
        * @apiGroup Usuario - Solicitação
        *
        * @apiParam (parameters) {String} id codigo do interesse
        * 
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   "result": "Solicitacao atribuida com sucesso!"
        * }
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/interesse/:id/aprova').get((req, res) => Controller.geraMatch(req, res));

         /**
        * @api {get} interesse/:id/recusa
        * @apiVersion 1.0.0
        * @apiName marcaMensagemComoLida
        * @apiGroup Usuario - Solicitação
        * @apiParam (parameters) {String} id codigo do interesse
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   "result": "Usuario recusado com sucesso!"
        * }
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */

        this.app.route('/interesse/:id/recusa').get((req, res) => Controller.recusaMatch(req, res));
    }
}

export default SolicitacaoRoute;
