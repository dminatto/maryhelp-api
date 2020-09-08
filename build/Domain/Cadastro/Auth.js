"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.prototype.geraToken = function (id) {
        //valida usuario e senha
        var token = jsonwebtoken_1.default.sign({ id: id }, process.env.SECRET, {
            expiresIn: 300 // expires in 5min
        });
        return { auth: true, token: token };
    };
    Auth.prototype.verificaJWT = function (token) {
        //var token = req.headers['x-access-token'];
        if (!token)
            return { auth: false, message: 'Usuário sem token.' };
        jsonwebtoken_1.default.verify(token, process.env.SECRET, function (err, decoded) {
            if (err)
                return { auth: false, message: 'Falha na autenticação do token.' };
            return { auth: true, usuario: decoded.id };
        });
    };
    return Auth;
}());
exports.default = new Auth();
