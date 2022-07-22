ESLint Config - Bild & Vitta
===

Biblioteca com as configurações padrões do ESLint para projetos Bild & Vitta. 

Regras padrões inclusas na biblioteca:
* [ESLint Standard](https://github.com/standard/eslint-config-standard)
* [ESLint Vue (essential, recommended e strongly recommended)](https://github.com/vuejs/eslint-plugin-vue)
* [ESLint Quasar](https://github.com/quasarframework/eslint-plugin-quasar)
* Regras customizadas para projetos Bild & Vitta

## Requisitos
* Quasar v2
* Vue v3

## Instalação
```bash
npm i @bildvitta/eslint-config -D
```

Após instalação, crie o arquivo `.eslintrc.js` no diretório raiz do projeto com a seguinte configuração:

```js
module.exports = {
  extends: [
    "@bildvitta/eslint-config"
  ]
}
```

Após, crie o arquivo `.eslintignore` no diretório raiz do projeto com a seguinte configuração:

```
/.quasar
/dist
/node_modules

/src-bex/www
/src-capacitor
/src-cordova

.eslintrc.js
```

## Observação
Com o uso desta biblioteca não é necessário adicionar nenhuma dependência externa do ESLint no arquivo `package.json`.

## Licença
MIT (c) Bild & Vitta <systemteam@bild.com.br>