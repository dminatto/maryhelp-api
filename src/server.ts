import App from './App/Facades/app';

var port = process.env.PORT || process.env.SERVER_PORT;

App.app.listen(port, () => console.log('servidor rodando'));