# BUSCA CEP #

[BuscaCEP]() Veja os detalhes do endereço e o mapa com base em uma pesquisa de CEP

## 🏃🏽‍♂️ Rodar projeto local

Antes de tudo crie um arquivo `.env` na raiz do projeto. Será necessário configurar a chave `MAPS_API_KEY` com a sua [API KEY do Google](https://developers.google.com/maps/documentation/geocoding/get-api-key)
`npm start` ou `npm start -- --no` e abra `http://localhost:3000/` no seu browser

**Instalação**
- `npm install`

Npm scripts:

| command              | description                                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| npm run start        | inicia servidor local em `localhost:3000`                                                                                                    |
| npm run build:dev    | cria build com arquivos "abertos" em modo de desenvolvimento                                                                                 |
| npm run build:prod   | cria build para produção com arquivos minificatos e otimizados                                                                               |

## ✔️ Checks

- [TravisCI](https://travis-ci.org)

## 🔍 Testes

Feito com [Jest](https://jestjs.io/) e [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

Npm scripts:

| command              | description                                        |
| -------------------- | -------------------------------------------------- |
| npm test              | roda todos os testes em modo `watch`              |

## ⚖️ License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details