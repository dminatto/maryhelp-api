import App from './App/Facades/app';

App.app.listen(process.env.SERVER_PORT, () => console.log('servidor rodando'));