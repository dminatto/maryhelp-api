define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "/home/dani/repository/maryhelp/apidoc/main.js",
    "groupTitle": "/home/dani/repository/maryhelp/apidoc/main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "servico",
    "title": "Busca serviços",
    "version": "1.0.0",
    "name": "buscaServicos",
    "group": "Serviços",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": [\n{\n    \"_id\": \"5f554f308d25d3845096c4b8\",\n    \"nome\": \"Baba\",\n    \"ativo\": true,\n    \"__v\": 0\n},\n{\n    \"_id\": \"5f555bb6628056885e50a2e7\",\n    \"nome\": \"Paseador de Cachorro\",\n    \"ativo\": true,\n    \"__v\": 0\n},\n]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/ServicoRoute.ts",
    "groupTitle": "Serviços"
  },
  {
    "type": "post",
    "url": "servico",
    "title": "Cadastra serviço",
    "version": "1.0.0",
    "name": "criaServico",
    "group": "Serviços",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do serviço</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "ativo",
            "description": "<p>Status do serviço</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"nome\": \"Atendimento Psicologico\",\n  \"ativo\" : 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"result\": [\n     {\n     \"_id\": \"5f56a00b9c1547586b69b917\",\n     \"codSolicitante\": [\n         \"5f55a5e825a0cfbdfa30b078\"\n     ],\n     \"nomeCompleto\": \"Maria Mercedes\",\n     \"codServico\": [\n         \"5f556a38363c4a936c0fd74c\"\n     ],\n     \"dataSolicitacao\": \"2020-09-07T21:03:07.464Z\"\n     }\n ]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/ServicoRoute.ts",
    "groupTitle": "Serviços"
  },
  {
    "type": "get",
    "url": "logout",
    "title": "",
    "version": "1.0.0",
    "name": "logout",
    "group": "Sistema",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": {\n          \"auth\": \"false\",\n          \"token\": \"null\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/CadastroRoute.ts",
    "groupTitle": "Sistema"
  },
  {
    "type": "get",
    "url": "login",
    "title": "",
    "version": "1.0.0",
    "name": "logout",
    "group": "Sistema",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>usuario</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>senha do usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"user\" : \"maria\",\n  \"pass\" : \"1234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": {\n          \"auth\": \"true\",\n          \"token\": \"gas\\douLKÇdassdasdasdASWA+F09DS6501G65AW445265W1feawsrfd.waetgojiszaidfu1FV65SZR4\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/CadastroRoute.ts",
    "groupTitle": "Sistema"
  },
  {
    "type": "get",
    "url": "privacidade",
    "title": "Retorna o código de privacidade e termos de uso",
    "version": "1.0.0",
    "name": "privacidade",
    "group": "Sistema",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"result\": [\n      {\n        \"titulo\": \"Termos de Uso\",\n        \"descricao\": \"Lorem ipsum dolor sit amet....\"\n      },\n      {\n        \"titulo\": \"Politica de Privacidade\",\n        \"descricao\": \"Lorem ipsum dolor sit amet...\"\n      }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/CadastroRoute.ts",
    "groupTitle": "Sistema"
  },
  {
    "type": "post",
    "url": "solicitacao/:id/chat",
    "title": "Envia mensagem",
    "version": "1.0.0",
    "name": "enviaMensagem",
    "group": "Solicitação_-_Mensagem",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id solicitação</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Ok</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/SolicitacaoRoute.ts",
    "groupTitle": "Solicitação_-_Mensagem"
  },
  {
    "type": "get",
    "url": "solicitacao/:id/chat",
    "title": "Busca histórico de mensagens",
    "version": "1.0.0",
    "name": "recuperaHistoricoDoChat",
    "group": "Solicitação_-_Mensagem",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id da mensagem</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Ok</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/SolicitacaoRoute.ts",
    "groupTitle": "Solicitação_-_Mensagem"
  },
  {
    "type": "put",
    "url": "solicitacao/:id/atribuir",
    "title": "Atribui solicitação para usuario",
    "version": "1.0.0",
    "name": "atribuiSolicitacaoParaUsuario",
    "group": "Solicitação",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id solicitação</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "idSolicitado",
            "description": "<p>usuario que vai atender a solicitação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"idSolicitado\" : \"5f55a5e825a0cfbdfa30b078\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": \"Solicitação atribuida com sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/SolicitacaoRoute.ts",
    "groupTitle": "Solicitação"
  },
  {
    "type": "get",
    "url": "usuario/:id/solicitacoes",
    "title": "Busca solicitação",
    "version": "1.0.0",
    "name": "buscaSolicitacoes",
    "group": "Solicitação",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": [{\n       \"_id\": \"5f56a00b9c1547586b69b917\",\n       \"codSolicitante\": [\n           \"5f55a5e825a0cfbdfa30b078\"\n       ],\n       \"nomeCompleto\": \"Maria Mercedes\",\n       \"codServico\": [\n           \"5f556a38363c4a936c0fd74c\"\n       ],\n       \"dataSolicitacao\": \"2020-09-07T21:03:07.464Z\"\n   },\n]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/SolicitacaoRoute.ts",
    "groupTitle": "Solicitação"
  },
  {
    "type": "get",
    "url": "solicitacao",
    "title": "Busca todas as solicitações em aberto",
    "version": "1.0.0",
    "name": "buscaSolicitacoesEmAberto",
    "group": "Solicitação",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Solicitacao Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": [\n      {\n      \"_id\": \"5f56a00b9c1547586b69b917\",\n      \"codSolicitante\": [\n          \"5f55a5e825a0cfbdfa30b078\"\n      ],\n      \"nomeCompleto\": \"Maria Mercedes\",\n      \"codServico\": [\n          \"5f556a38363c4a936c0fd74c\"\n      ],\n      \"dataSolicitacao\": \"2020-09-07T21:03:07.464Z\"\n      }\n  ]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/SolicitacaoRoute.ts",
    "groupTitle": "Solicitação"
  },
  {
    "type": "get",
    "url": "solicitacoes/servico/:idServico",
    "title": "Busca solicitação por serviço",
    "version": "1.0.0",
    "name": "buscaSolicitacoesPorServico",
    "group": "Solicitação",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": [{\n       \"_id\": \"5f56a00b9c1547586b69b917\",\n       \"codSolicitante\": [\n           \"5f55a5e825a0cfbdfa30b078\"\n       ],\n       \"nomeCompleto\": \"Maria Mercedes\",\n       \"codServico\": [\n           \"5f556a38363c4a936c0fd74c\"\n       ],\n       \"dataSolicitacao\": \"2020-09-07T21:03:07.464Z\"\n   },\n]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/SolicitacaoRoute.ts",
    "groupTitle": "Solicitação"
  },
  {
    "type": "get",
    "url": "solicitacao/:id/finalizar",
    "title": "Cancela solicitação",
    "version": "1.0.0",
    "name": "cancelaSolicitacao",
    "group": "Solicitação",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id solicitação</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": \"Solicitação cancelada com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/SolicitacaoRoute.ts",
    "groupTitle": "Solicitação"
  },
  {
    "type": "post",
    "url": "usuario/:id/solicitacoes",
    "title": "Cadastra solicitação",
    "version": "1.0.0",
    "name": "criaSolicitacao",
    "group": "Solicitação",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id do usuario</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "codSolicitado",
            "description": "<p>Código do serviço</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "codServico",
            "description": "<p>Código do serviço</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"codSolicitado\": \"5f568faa13f5824934eadf1a\",\n\t            \"codServico\": \"5f556a38363c4a936c0fd74c\"\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"result\": {\n  \"codSolicitante\": [\n      \"5f55a5e825a0cfbdfa30b078\"\n      ],\n      \"codSolicitado\": [\n      \"5f568faa13f5824934eadf1a\"\n      ],\n      \"codServico\": [\n      \"5f556a38363c4a936c0fd74c\"\n      ],\n      \"status\": 1,\n      \"ativo\": true,\n      \"_id\": \"5f56a00b9c1547586b69b917\",\n      \"dataSolicitacao\": \"2020-09-07T21:03:07.464Z\",\n      \"__v\": 0\n ]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/SolicitacaoRoute.ts",
    "groupTitle": "Solicitação"
  },
  {
    "type": "get",
    "url": "solicitacao/:id/finalizar",
    "title": "Finaliza solicitação",
    "version": "1.0.0",
    "name": "finalizacaoSolicitacao",
    "group": "Solicitação",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id solicitação</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": \"Solicitação finalizada com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/SolicitacaoRoute.ts",
    "groupTitle": "Solicitação"
  },
  {
    "type": "get",
    "url": "solicitacao/:id/chat/:idMensagem/visualizar",
    "title": "Marca mensagem como lida",
    "version": "1.0.0",
    "name": "marcaMensagemComoLida",
    "group": "Usuario_-_Notificação",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>codigo do usuario</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "idMensagem",
            "description": "<p>codigo da mensagem</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": \"Serviço lida!\"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/SolicitacaoRoute.ts",
    "groupTitle": "Usuario_-_Notificação"
  },
  {
    "type": "put",
    "url": "usuario/:idUsuario/servicos/:idServico",
    "title": "Altera serviço para usuario",
    "version": "1.0.0",
    "name": "incluiServicoUsuario",
    "group": "Usuario_-_Serviço",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "idUsuario",
            "description": "<p>codigo do usuario</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "idServico",
            "description": "<p>codigo do serviço</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "tipoAtendimento",
            "description": "<p>tipo de atendimento</p>"
          },
          {
            "group": "parameters",
            "type": "Boolean",
            "optional": false,
            "field": "aceitaPermuta",
            "description": "<p>aceita permuta</p>"
          },
          {
            "group": "parameters",
            "type": "Numeric",
            "optional": false,
            "field": "valor",
            "description": "<p>valor do serviço oferecido</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"tipoAtendimento\": \"Presencial\",\n  \"aceitaPermuta\": \"1\",\n  \"valor\": \"25.00\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  result\": \"Serviço editado com sucesso!\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/ServicoRoute.ts",
    "groupTitle": "Usuario_-_Serviço"
  },
  {
    "type": "delete",
    "url": "usuario/:idUsuario/servicos/:idServico",
    "title": "Exclui serviço para usuario",
    "version": "1.0.0",
    "name": "incluiServicoUsuario",
    "group": "Usuario_-_Serviço",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "idUsuario",
            "description": "<p>codigo do usuario</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "idServico",
            "description": "<p>codigo do serviço</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  result\": \"Serviço excluido com sucesso!\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/ServicoRoute.ts",
    "groupTitle": "Usuario_-_Serviço"
  },
  {
    "type": "post",
    "url": "usuario/:id/servicos",
    "title": "Inclui serviço para usuario",
    "version": "1.0.0",
    "name": "incluiServicoUsuario",
    "group": "Usuario_-_Serviço",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id do usuario</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "codServico",
            "description": "<p>codigo do serviço</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "tipoAtendimento",
            "description": "<p>tipo de atendimento</p>"
          },
          {
            "group": "parameters",
            "type": "Boolean",
            "optional": false,
            "field": "aceitaPermuta",
            "description": "<p>aceita permuta</p>"
          },
          {
            "group": "parameters",
            "type": "Numeric",
            "optional": false,
            "field": "valor",
            "description": "<p>valor do serviço oferecido</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"codServico\": \"5f555bb6628056885e50a2e7\",\n  \"tipoAtendimento\": \"Presencial\",\n  \"aceitaPermuta\": \"1\",\n  \"valor\": \"25.00\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  result\": \"Serviço incluso com sucesso!\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/ServicoRoute.ts",
    "groupTitle": "Usuario_-_Serviço"
  },
  {
    "type": "post",
    "url": "solicitacao/registraInteresse",
    "title": "Demonstra interesse em ajudar",
    "version": "1.0.0",
    "name": "sinalizaInteresse",
    "group": "Usuario_-_Solicitacao",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "codSolicitacao",
            "description": "<p>codigo da solicitacao</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "codSolicitante",
            "description": "<p>codigo do usuario interessado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"codSolicitacao\" : \"5f55a5e825a0cfbdfa30b078\",\n  \"codSolicitante\" : \"5f55a5e825a0cfbdfa30b078\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": \"Interesse registrado com sucesso\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/SolicitacaoRoute.ts",
    "groupTitle": "Usuario_-_Solicitacao"
  },
  {
    "type": "get",
    "url": "interesse/:id/recusa",
    "title": "",
    "version": "1.0.0",
    "name": "marcaMensagemComoLida",
    "group": "Usuario_-_Solicitação",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>codigo do interesse</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": \"Usuario recusado com sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/SolicitacaoRoute.ts",
    "groupTitle": "Usuario_-_Solicitação"
  },
  {
    "type": "get",
    "url": "interesse/:id/aprova",
    "title": "Aprova interesse",
    "version": "1.0.0",
    "name": "marcaMensagemComoLida",
    "group": "Usuario_-_Solicitação",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>codigo do interesse</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": \"Solicitacao atribuida com sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/SolicitacaoRoute.ts",
    "groupTitle": "Usuario_-_Solicitação"
  },
  {
    "type": "put",
    "url": "usuario/:id/endereco/:enderecoId",
    "title": "Edita endereço do usuario",
    "version": "1.0.0",
    "name": "editaEndereco",
    "group": "Usuário_-_Endereço",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>codigo do usuario</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "enderecoId",
            "description": "<p>codigo do endereço</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "tipoEndereco",
            "description": "<p>tipo de endereço</p>"
          },
          {
            "group": "parameters",
            "type": "Numeric",
            "optional": false,
            "field": "cep",
            "description": "<p>cep</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "uf",
            "description": "<p>uf</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "cidade",
            "description": "<p>cidade</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "bairro",
            "description": "<p>bairro</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "endereco",
            "description": "<p>endereço</p>"
          },
          {
            "group": "parameters",
            "type": "Numeric",
            "optional": false,
            "field": "numero",
            "description": "<p>numero do endereço</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"tipoEndereco\": \"residencial\",\n  \"cep\": \"8887777\",\n  \"uf\": \"SC\",\n  \"cidade\": \"Macieira\",\n  \"bairro\": \"Centro\",\n  \"endereco\": \"rua das laranjeiras\",\n  \"numero\": \"100\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  result\": [\n    \"codUsuario\": [\n          \"5f55a5e825a0cfbdfa30b078\"\n      ],\n      \"_id\": \"5f55b4ef72de84c8f06e5cb4\",\n      \"tipoEndereco\": \"comercial\",\n      \"cep\": 8887777,\n      \"cidade\": \"A cor da cidade sou eu\",\n      \"bairro\": \"Centro\",\n      \"endereco\": \"rua das laranjeiras\",\n      \"numero\": 100,\n      \"__v\": 0\n]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/CadastroRoute.ts",
    "groupTitle": "Usuário_-_Endereço"
  },
  {
    "type": "put",
    "url": "usuario/:id/endereco/:enderecoId'",
    "title": "Exclui endereço do usuário",
    "version": "1.0.0",
    "name": "excluiEndereco",
    "group": "Usuário_-_Endereço",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>codigo do usuario</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "enderecoId",
            "description": "<p>codigo do endereço</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": \"Endereço excluido com sucesso!!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/CadastroRoute.ts",
    "groupTitle": "Usuário_-_Endereço"
  },
  {
    "type": "post",
    "url": "usuario/:id/endereco",
    "title": "Inclui novo endereco do usuario",
    "version": "1.0.0",
    "name": "incluiEndereco",
    "group": "Usuário_-_Endereço",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>codigo do usuario</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "tipoEndereco",
            "description": "<p>tipo de endereço</p>"
          },
          {
            "group": "parameters",
            "type": "Numeric",
            "optional": false,
            "field": "cep",
            "description": "<p>cep</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "uf",
            "description": "<p>uf</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "cidade",
            "description": "<p>cidade</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "bairro",
            "description": "<p>bairro</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "endereco",
            "description": "<p>endereço</p>"
          },
          {
            "group": "parameters",
            "type": "Numeric",
            "optional": false,
            "field": "numero",
            "description": "<p>numero do endereço</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"tipoEndereco\": \"residencial\",\n  \"cep\": \"8887777\",\n  \"uf\": \"SC\",\n  \"cidade\": \"Macieira\",\n  \"bairro\": \"Centro\",\n  \"endereco\": \"rua das laranjeiras\",\n  \"numero\": \"100\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  result\": [\n    \"codUsuario\": [\n          \"5f55a5e825a0cfbdfa30b078\"\n      ],\n      \"_id\": \"5f55b4ef72de84c8f06e5cb4\",\n      \"tipoEndereco\": \"comercial\",\n      \"cep\": 8887777,\n      \"cidade\": \"A cor da cidade sou eu\",\n      \"bairro\": \"Centro\",\n      \"endereco\": \"rua das laranjeiras\",\n      \"numero\": 100,\n      \"__v\": 0\n]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/CadastroRoute.ts",
    "groupTitle": "Usuário_-_Endereço"
  },
  {
    "type": "post",
    "url": "usuario/:id/block/",
    "title": "Bloqueia usuario",
    "version": "1.0.0",
    "name": "bloqueiaUsuario",
    "group": "Usuário_-_Lista_de_Bloqueio",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>codigo do usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": \"Usuario bloqueado com sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/CadastroRoute.ts",
    "groupTitle": "Usuário_-_Lista_de_Bloqueio"
  },
  {
    "type": "delete",
    "url": "usuario/:id/block/:blockid",
    "title": "Retira usuario da lista de bloqueio",
    "version": "1.0.0",
    "name": "deletaBloqueio",
    "group": "Usuário_-_Lista_de_Bloqueio",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>codigo do usuario</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "blockid",
            "description": "<p>codigo do bloqueio</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": \"Usuario desbloqueado com sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/CadastroRoute.ts",
    "groupTitle": "Usuário_-_Lista_de_Bloqueio"
  },
  {
    "type": "put",
    "url": "usuario/:id/notificacoes/:notificacaoId'",
    "title": "Marca notificação como lida",
    "version": "1.0.0",
    "name": "marcarNotificacaoComoLida",
    "group": "Usuário_-_Notificação",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>codigo do usuario</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "notificacaoId",
            "description": "<p>codigo da notificação</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": \"Notificação lida com sucesso!!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/CadastroRoute.ts",
    "groupTitle": "Usuário_-_Notificação"
  },
  {
    "type": "get",
    "url": "usuario/:id",
    "title": "Busca usuario",
    "version": "1.0.0",
    "name": "buscaUsuario",
    "group": "Usuário",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>codigo do usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": [{\n      \"cadastro\": {\n        \"_id\": \"5f55a5e825a0cfbdfa30b078\",\n        \"nome\": \"Maria\",\n        \"sobrenome\": \"Mercedes\",\n        \"dataNascimento\": \"1990-11-10T02:00:00.000Z\",\n        \"usuario\": \"gabis\",\n        \"senha\": \"4654654\",\n        \"telefone\": 88888888,\n        \"email\": \"mariadobairro@email.com\",\n        \"dataRegistro\": \"2020-09-07T03:15:52.703Z\",\n        \"__v\": 0\n      },\n      \"endereco\": [\n        {\n          \"codUsuario\": [\n            \"5f55a5e825a0cfbdfa30b078\"\n          ],\n          \"_id\": \"5f55853275214ea4206e38ff\",\n          \"tipoEndereco\": \"residencial\",\n          \"cep\": 8887777,\n          \"uf\": \"SC\",\n          \"cidade\": \"Macieira\",\n          \"bairro\": \"Centro\",\n          \"endereco\": \"rua das laranjeiras\",\n          \"numero\": 100,\n          \"__v\": 0\n        },\n    ],\n      \"servicosOferecidos\": [\n        {\n          \"_id\": \"5f55a5e825a0cfbdfa30b07a\",\n          \"tipoAtendimento\": \"Presencial\",\n          \"aceitaPermuta\": false,\n          \"valor\": 60\n        },\n        {\n          \"_id\": \"5f55a5e825a0cfbdfa30b07b\",\n          \"tipoAtendimento\": \"Online\",\n          \"aceitaPermuta\": true,\n          \"valor\": 0\n        },\n        {\n          \"_id\": \"5f55a9a07e521cc12883dc53\",\n          \"tipoAtendimento\": \"Presencial\",\n          \"aceitaPermuta\": true,\n          \"valor\": 25\n        },\n        {\n          \"_id\": \"5f55ae083301e9c3aace36e2\"\n        }\n      ],\n      \"usuariosBloqueados\": [\n        {\n          \"_id\": \"5f55b9f5409e7ecbf4ecf98d\",\n          \"codUsuario\": [\n            \"5f55a5e825a0cfbdfa30b078\"\n          ],\n          \"nomeCompleto\": \"Maria Mercedes\",\n          \"dataBloqueio\": \"2020-09-07T04:41:25.627Z\"\n        }\n      ],\n      \"notificacoes\": [\n        {\n          \"codUsuario\": [\n            \"5f55a5e825a0cfbdfa30b078\"\n          ],\n          \"lido\": true,\n          \"_id\": \"5f55a5e825a0cfbdfa30b07c\",\n          \"descricao\": \"Bem-vindo ao MaryHelp!\",\n          \"__v\": 0\n        }\n      ],\n      \"avaliacoesFeitas\": [],\n      \"avaliacoesRecebidas\": [],\n      \"mensagens\": []\n   }\n]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/CadastroRoute.ts",
    "groupTitle": "Usuário"
  },
  {
    "type": "post",
    "url": "novo-cadastro",
    "title": "Cadastro de usuario",
    "version": "1.0.0",
    "name": "criaUsuario",
    "group": "Usuário",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"cadastro\": {\n   \"nome\": \"Gabriela\",\n   \"sobrenome\": \"Silva\",\n   \"dataNascimento\": \"11/10/1990\",\n   \"usuario\": \"gabis\",\n   \"senha\": 1234,\n   \"telefone\": \"000000000\",\n   \"email\": \"gabi.s@email.com\",\n   \"temfilhos\": \"0\",\n   \"foto\" : \"/.../.../foto.png\"\n   },\n  \"endereco\": {\n      \"0\": {\n          \"tipoEndereco\": \"comercial\",\n          \"cep\": \"000000000\",\n          \"uf\": \"SC\",\n          \"cidade\": \"Cidade\",\n          \"bairro\": \"Centro\",\n          \"endereco\": \"rua das laranjeiras\",\n          \"numero\": \"20\"\n      }\n  },\n  \"servicosOferecidos\": {\n      \"0\": {\n          \"codServico\": \"5f556a38363c4a936c0fd74c\",\n          \"tipoAtendimento\": \"Presencial\",\n          \"aceitaPermuta\": \"0\",\n          \"valor\": \"60.00\"\n      },\n      \"1\": {\n          \"codServico\": \"5f556a40363c4a936c0fd74d\",\n          \"tipoAtendimento\": \"Online\",\n          \"aceitaPermuta\": \"1\",\n          \"valor\": \"00.00\"\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": [{\n      \"cadastro\": {\n        \"_id\": \"5f55a5e825a0cfbdfa30b078\",\n        \"nome\": \"Maria\",\n        \"sobrenome\": \"Mercedes\",\n        \"dataNascimento\": \"1990-11-10T02:00:00.000Z\",\n        \"usuario\": \"gabis\",\n        \"senha\": \"4654654\",\n        \"telefone\": 88888888,\n        \"email\": \"mariadobairro@email.com\",\n        \"dataRegistro\": \"2020-09-07T03:15:52.703Z\",\n        \"__v\": 0\n      },\n      \"endereco\": [\n        {\n          \"codUsuario\": [\n            \"5f55a5e825a0cfbdfa30b078\"\n          ],\n          \"_id\": \"5f55853275214ea4206e38ff\",\n          \"tipoEndereco\": \"residencial\",\n          \"cep\": 8887777,\n          \"uf\": \"SC\",\n          \"cidade\": \"Macieira\",\n          \"bairro\": \"Centro\",\n          \"endereco\": \"rua das laranjeiras\",\n          \"numero\": 100,\n          \"__v\": 0\n        },\n    ],\n      \"servicosOferecidos\": [\n        {\n          \"_id\": \"5f55a5e825a0cfbdfa30b07a\",\n          \"tipoAtendimento\": \"Presencial\",\n          \"aceitaPermuta\": false,\n          \"valor\": 60\n        },\n        {\n          \"_id\": \"5f55a5e825a0cfbdfa30b07b\",\n          \"tipoAtendimento\": \"Online\",\n          \"aceitaPermuta\": true,\n          \"valor\": 0\n        },\n        {\n          \"_id\": \"5f55a9a07e521cc12883dc53\",\n          \"tipoAtendimento\": \"Presencial\",\n          \"aceitaPermuta\": true,\n          \"valor\": 25\n        },\n        {\n          \"_id\": \"5f55ae083301e9c3aace36e2\"\n        }\n      ],\n      \"usuariosBloqueados\": [\n        {\n          \"_id\": \"5f55b9f5409e7ecbf4ecf98d\",\n          \"codUsuario\": [\n            \"5f55a5e825a0cfbdfa30b078\"\n          ],\n          \"nomeCompleto\": \"Maria Mercedes\",\n          \"dataBloqueio\": \"2020-09-07T04:41:25.627Z\"\n        }\n      ],\n      \"notificacoes\": [\n        {\n          \"codUsuario\": [\n            \"5f55a5e825a0cfbdfa30b078\"\n          ],\n          \"lido\": true,\n          \"_id\": \"5f55a5e825a0cfbdfa30b07c\",\n          \"descricao\": \"Bem-vindo ao MaryHelp!\",\n          \"__v\": 0\n        }\n      ],\n      \"avaliacoesFeitas\": [],\n      \"avaliacoesRecebidas\": [],\n      \"mensagens\": []\n   }\n]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/CadastroRoute.ts",
    "groupTitle": "Usuário"
  },
  {
    "type": "put",
    "url": "usuario/:id",
    "title": "Edita dados do usuario",
    "version": "1.0.0",
    "name": "editaUsuario",
    "group": "Usuário",
    "parameter": {
      "fields": {
        "parameters": [
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>codigo do usuario</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>nome do usuario</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "sobrenome",
            "description": "<p>sobrenome do usuario</p>"
          },
          {
            "group": "parameters",
            "type": "Date",
            "optional": false,
            "field": "dataNascimento",
            "description": "<p>cep</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>usuario</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>senha do usuario</p>"
          },
          {
            "group": "parameters",
            "type": "Numeric",
            "optional": false,
            "field": "telefone",
            "description": "<p>telefone do usuario</p>"
          },
          {
            "group": "parameters",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email do usuario</p>"
          },
          {
            "group": "parameters",
            "type": "Boolean",
            "optional": false,
            "field": "temfilhos",
            "description": "<p>se tem filhos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"nome\": \"Maria\",\n  \"sobrenome\": \"Mercedes\",\n  \"dataNascimento\": \"11/10/1990\",\n  \"usuario\": \"gabis\",\n  \"senha\": 4654654,\n  \"telefone\": \"88888888\",\n  \"email\": \"mariadobairro@email.com\",\n  \"temfilhos\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"result\": \"Usuario alterado com sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UseNortFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/App/Routes/CadastroRoute.ts",
    "groupTitle": "Usuário"
  }
] });
