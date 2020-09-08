"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServicosController_1 = require("../Controllers/ServicosController");
var ServicoRoute = /** @class */ (function () {
    function ServicoRoute(app) {
        this.app = app;
        this.listaRotas();
    }
    ServicoRoute.prototype.listaRotas = function () {
        /**
        * @api {get} servico Busca serviços
        * @apiVersion 1.0.0
        * @apiName buscaServicos
        * @apiGroup Serviços
        * @apiSuccessExample Success-Response:
        * {
        *   "result": [
        * {
        *     "_id": "5f554f308d25d3845096c4b8",
        *     "nome": "Baba",
        *     "ativo": true,
        *     "__v": 0
        * },
        * {
        *     "_id": "5f555bb6628056885e50a2e7",
        *     "nome": "Paseador de Cachorro",
        *     "ativo": true,
        *     "__v": 0
        * },
        * ]}
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/servico').get(function (req, res) { return ServicosController_1.default.buscaServicos(req, res); });
        /**
        * @api {post} servico Cadastra serviço
        * @apiVersion 1.0.0
        * @apiName criaServico
        * @apiGroup Serviços
        *
        * @apiParam (parameters) {String} nome Nome do serviço
        * @apiParam (parameters) {String} ativo Status do serviço
        *
        * @apiParamExample {json} Request-Example:
        *     {
        *       "nome": "Atendimento Psicologico",
        *       "ativo" : 1
        *     }
        *
        * @apiSuccess (200) {String} data  Ok
        * @apiSuccessExample Success-Response:
        * {
        *  "result": [
        *      {
        *      "_id": "5f56a00b9c1547586b69b917",
        *      "codSolicitante": [
        *          "5f55a5e825a0cfbdfa30b078"
        *      ],
        *      "nomeCompleto": "Maria Mercedes",
        *      "codServico": [
        *          "5f556a38363c4a936c0fd74c"
        *      ],
        *      "dataSolicitacao": "2020-09-07T21:03:07.464Z"
        *      }
        *  ]}
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/servico').post(function (req, res) { return ServicosController_1.default.criaServico(req, res); });
        /**
        * @api {post} usuario/:id/servicos Inclui serviço para usuario
        * @apiVersion 1.0.0
        * @apiName incluiServicoUsuario
        * @apiGroup Usuario - Serviço
        *
        * @apiParam (parameters) {String} id id do usuario
        * @apiParam (parameters) {String} codServico codigo do serviço
        * @apiParam (parameters) {String} tipoAtendimento tipo de atendimento
        * @apiParam (parameters) {Boolean} aceitaPermuta aceita permuta
        * @apiParam (parameters) {Numeric} valor valor do serviço oferecido
        *
        * @apiParamExample {json} Request-Example:
        *     {
        *       "codServico": "5f555bb6628056885e50a2e7",
        *       "tipoAtendimento": "Presencial",
        *       "aceitaPermuta": "1",
        *       "valor": "25.00"
        *     }
        *
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   result": "Serviço incluso com sucesso!
        * }
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/usuario/:id/servicos').post(function (req, res) { return ServicosController_1.default.incluiServicoUsuario(req, res); });
        /**
        * @api {put} usuario/:idUsuario/servicos/:idServico Altera serviço para usuario
        * @apiVersion 1.0.0
        * @apiName incluiServicoUsuario
        * @apiGroup Usuario - Serviço
        *
        * @apiParam (parameters) {String} idUsuario codigo do usuario
        * @apiParam (parameters) {String} idServico codigo do serviço
        * @apiParam (parameters) {String} tipoAtendimento tipo de atendimento
        * @apiParam (parameters) {Boolean} aceitaPermuta aceita permuta
        * @apiParam (parameters) {Numeric} valor valor do serviço oferecido
        *
        * @apiParamExample {json} Request-Example:
        *     {
        *       "tipoAtendimento": "Presencial",
        *       "aceitaPermuta": "1",
        *       "valor": "25.00"
        *     }
        *
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   result": "Serviço editado com sucesso!
        * }
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/usuario/:id/servicos/:servicoId').put(function (req, res) { return ServicosController_1.default.editaServicoUsuario(req, res); });
        /**
        * @api {delete} usuario/:idUsuario/servicos/:idServico Exclui serviço para usuario
        * @apiVersion 1.0.0
        * @apiName incluiServicoUsuario
        * @apiGroup Usuario - Serviço
        *
        * @apiParam (parameters) {String} idUsuario codigo do usuario
        * @apiParam (parameters) {String} idServico codigo do serviço
        *
        * @apiSuccess (200) {String} message  Ok
        * @apiSuccessExample Success-Response:
        * {
        *   result": "Serviço excluido com sucesso!
        * }
        * @apiError error
        * @apiErrorExample Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "UseNortFound"
        *     }
        */
        this.app.route('/usuario/:id/servicos/:servicoId').delete(function (req, res) { return ServicosController_1.default.excluiServicoUsuario(req, res); });
    };
    return ServicoRoute;
}());
exports.default = ServicoRoute;
