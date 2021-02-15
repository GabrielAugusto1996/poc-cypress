/// <reference types = "cypress" />

describe('Work with basic elements', () => {

    //Executa antes de todos os testes
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

    })

    //Executa antes de cada um dos testes
    beforeEach(() => {
        cy.reload()
    })

    it('Text', () => {
        cy.get('body')
            .should('contain', 'Cuidado')

        cy.get('span')
            .should('contain', 'Cuidado')

        cy.get('.facilAchar')
            .should('contain', 'Cuidado')

        cy.get('.facilAchar')
            .should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {
        cy.contains('Voltar')
            .click()

        cy.get('#resultado')
            .should('have.text', 'Voltou!')

        cy.reload();

        cy.get('#resultado')
            .should('have.not.text', 'Voltou!')
    })

    it.only('Text Fields', () => {
        cy.get('#formNome')
            .type('Cypress Text')
            .should('have.value', 'Cypress Text')

        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value', 'textarea')

        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', { delay: 100 })
            .should('have.value', 'acerto')
    })
})