# Changelog
Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### Sobre os "BREAKING CHANGES"
Podemos ter pequenas breaking changes sem alterar o `major` version, apesar de serem pequenas, podem alterar o comportamento da funcionalidade caso não seja feita uma atualização, **preste muita atenção** nas breaking changes dentro das versões quando existirem.

## [1.0.0] - 19-07-2023
Lançando versão stable

### Adicionado
- Adicionado a regra `vue/no-v-text-v-html-on-component` com o valor `off`.

## [1.0.0-beta.5] - 29-07-2022
### Adicionado
- Adicionado a regra `vue/func-call-spacing` com o valor `['error', 'never']`.

## [1.0.0-beta.4] - 26-07-2022
### Modificado
- Modificado a regra `vue/valid-next-tick` para `off`.
- Modificado a regra `max-len` para ignorar **comments**.

## [1.0.0-beta.3] - 25-07-2022
### Modificado
- Modificado a regra `vue/new-line-between-multi-line-property` para `off`.

## [1.0.0-beta.2] - 25-07-2022
### Modificado
- Modificado a regra `max-len` para ignorar **strings**, *template literals*, *regExp* e *urls*.

## [1.0.0-beta.1] - 25-07-2022
### Adicionado
- Adicionado `CHANGELOG.md`.
- Adicionado biblioteca `ajv`.

### Modificado
- Atualizado `README.md`.

## [1.0.0-beta.0] - 22-07-2022
## Extensão criada
