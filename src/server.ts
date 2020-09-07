import App from './App/Facades/app';


let porta = (process.env.NODE_ENV == 'production')  ? process.env.PORT : 5000

App.app.listen(porta, () => console.log('servidor está rodando na porta: ' + porta));

process.once('SIGUSR2', () => App.closeDataBaseConnection('nodemon restart', ()=> process.kill(process.pid, 'SIGUSR2')));
process.on('SIGINT', () => App.closeDataBaseConnection('execução foi interrompida', ()=> process.exit(0)));