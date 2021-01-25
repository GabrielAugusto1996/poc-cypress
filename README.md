# poc-cypress
Criação de uma POC utilizando a ferramenta Cypress

Documentação: https://docs.cypress.io/guides/overview/why-cypress.html#Cypress-in-the-Real-World

### Requisitos para configuração do Ambiente

1 - NPM - Qualquer versão
2 - NODE - Qualquer versão
3 - Cypress - Versão 3.6.0 - Comando: npm install cypress@3.6.0

### Como executar o Cypress

-- Linux e MAC:

Execute o seguinte comando dentro da pasta do projeto no seu terminal:

./node_modules/.bin/cypress open

-- Windows:

Adicione o seguinte script no seu arquivo de **package.json**:

"cypress:open": "cypress open"

Em seguida execute o comando: npm run cypress:open