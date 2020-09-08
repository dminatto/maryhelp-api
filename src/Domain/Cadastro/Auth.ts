import jwt from 'jsonwebtoken';


class Auth {


    geraToken(id) {

        //valida usuario e senha

        var token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300 // expires in 5min
        });

        return { auth: true, token: token };
    }

    verificaJWT(token) {
        //var token = req.headers['x-access-token'];
        if (!token) return { auth: false, message: 'Usuário sem token.' };

        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            if (err) return { auth: false, message: 'Falha na autenticação do token.' };
            return { auth: true, usuario: decoded.id };
        });

    }

}

export default new Auth();