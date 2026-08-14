ESLint Quasar - Bild & Vitta
===

Biblioteca com as configurações padrões do ESLint para projetos Bild & Vitta.

## Requisitos
* Quasar v2
* Quasar App Vite v2
* Vue v3

Regras padrões inclusas na biblioteca:
```json
{
  "@eslint/js": "^9.27.0",
  "eslint": "^9.27.0",
  "eslint-plugin-vue": "^10.1.0",
  "globals": "^16.2.0",
  "neostandard": "^0.12.1",
  "eslint-plugin-import": "^2.31.0"
}
```

## Instalação
```bash
npm i @bildvitta/eslint-config-quasar -D
```

Após instalação, crie o arquivo `eslint.config.js` no diretório raiz do projeto com a seguinte configuração:

```js
import { defineConfig } from 'eslint/config'

import bildvittaConfig from '@bildvitta/eslint-config-quasar'

export default defineConfig([
  {
    extends: [bildvittaConfig]
  }
])

```

## Utilização
O ESLint provém de um comando para executar a validação de todos os arquivos do projeto:

```bash
npx eslint --ext .js,.vue ./
```

Para realizar os ajustes necessários automaticamente:

```bash
npx eslint --ext .js,.vue ./ --fix
```

### Configuração para o Visual Studio Code

É importante que o editor de texto esteja devidamente configurado para executar as validações do ESLint automaticamente. 

Para isto, realize a instalação da extensão [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) no Visual Studio Code e após abra as configurações do usuário:
* Abra a paleta de comandos (Ctrl+Shift+P / Cmd+Shift+P);
* Digite "Abrir configurações";
* Você é apresentado com duas opções, escolha "Abrir configurações (JSON)";
* No JSON insira a configuração abaixo:

```json
{
  "editor.codeActionsOnSave" : {
    "source.fixAll" : true
  }
}
```

## Observação
Com o uso desta biblioteca não é necessário adicionar nenhuma dependência externa do ESLint no arquivo `package.json`.

## Licença
MIT (c) Bild & Vitta <systemteam@bild.com.br>