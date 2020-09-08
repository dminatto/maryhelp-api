import jwt from 'jsonwebtoken';


class Auth {


    geraToken(id) {


        //valida usuario e senha

        var token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300 // expires in 5min
        });

        return { auth: true, token: token };
    }

    verifyJWT(token) {
        //var token = req.headers['x-access-token'];
        if (!token) return { auth: false, message: 'No token provided.' };

        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            if (err) return { auth: false, message: 'Failed to authenticate token.' };
            return { auth: true, usuario: decoded.id };
        });

    }

}

export default Auth;