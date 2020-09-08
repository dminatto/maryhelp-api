# MaryHelp - API

Mary Help é uma plataforma colaborativa criada no Mega Hack Women, e tem como objetivo proporcionar um local onde mulheres podem se conectar para buscarem auxílio mútuo.

- [Deploy da aplicação](https://maryhelp.herokuapp.com/)
- [Documentação](https://dminatto.github.io/maryhelp-api/apidoc/index.html)
- [Pitch](https://www.youtube.com/watch?v=sqjqv-4Lob8)
- [Apresentação](https://www.youtube.com/watch?v=BbvoUEFh6WA&feature=youtu.be)


## Getting started

- [NodeJS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [JWT]()

## Developing

No terminal, clone o projeto:
```
git clone https://github.com/dminatto/maryhelp-api.git
```
```
cd api
```
Instale as dependências:
```
npm i
```
Execute a aplicação:
```
npm run dev
```

## Building

Para gerar a build rodar o script
```
npm run build
```


## Doc

Para gerar a documentação rodar o script
```
apidoc -c apidoc.json -i . -e ./node_modules -e ./build  -o ./apidoc
```
-----
Desenvolvido para o [Mega Hack Women 2020](https://www.megahackwomen.com.br/)