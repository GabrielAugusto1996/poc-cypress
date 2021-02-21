/// <reference types = "cypress" />

describe('Work with alerts', () => {

    //Executa antes de todos os testes
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

    })

    //Executa antes de cada um dos testes
    beforeEach(() => {
        cy.reload()
    })

    it('Fazendo o desafio de validação de mensagem', () => {
        const stub = cy.stub().as('alerta')

        cy.on('window:alert', stub)

        cy.get('#formCadastrar')
            .click()
            .then(() => expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))

        cy.get('#formNome').type('Gabriel')

        cy.get('#formCadastrar')
            .click()
            .then(() => expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))

        cy.get('[data-cy=dataSobrenome]').type('Morato')

        cy.get('#formCadastrar')
            .click()
            .then(() => expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))

        cy.get('#formSexoMasc')
            .click()
            .should('be.checked')

        cy.get('#formCadastrar')
            .click()

        cy.get('#resultado > :nth-child(1)')
            .should('contain', 'Cadastrado!')
    })
})