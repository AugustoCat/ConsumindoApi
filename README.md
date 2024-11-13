# Finanças Pessoais - Aplicação Web

Este é um aplicativo simples de finanças pessoais que permite fazer transferências, visualizar o histórico de transações e verificar o saldo atualizado. A aplicação front-end é construída com HTML, CSS e JavaScript, e o back-end utiliza o [JSON-Server](https://github.com/typicode/json-server) para simular uma API RESTful.

## Funcionalidades

- **Registrar transferências**: O usuário pode cadastrar uma nova transferência, especificando o nome da transferência e o valor.
- **Exibir histórico de transferências**: O aplicativo exibe uma lista das transferências realizadas.
- **Atualizar saldo**: O saldo total é atualizado automaticamente com base nas transferências realizadas.
- **Excluir transferências**: O usuário pode excluir uma transferência do histórico e o saldo será recalculado.
- **Atualizar transferências**: O usuário pode editar o nome e o valor de uma transferência existente.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript (ES6)
- **Backend**: [JSON-Server](https://github.com/typicode/json-server) para simular a API RESTful
- **Gestão de Estado**: Utilização de JavaScript assíncrono com `async`/`await` para chamadas de API e manipulação do DOM.
