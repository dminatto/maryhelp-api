import App from './App/Facades/app';

App.app.listen(process.env.PORT, () => console.log('servidor está rodando na porta: ' + process.env.PORT));
