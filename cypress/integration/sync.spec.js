/// <reference types = "cypress" />

describe('Esperas...', () => {
    //Executa antes de todos os testes
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

    })

    //Executa antes de cada um dos testes
    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar elemento estar disponível', () => {
        cy.get('#novoCampo')
            .should('not.exist')

        cy.get('#buttonDelay')
            .click()

        cy.get('#novoCampo')
            .type('funciona')
    })

    it('Deve fazer retrys', () => {
        cy.get('#buttonDelay')
            .click()

        cy.get('#novoCampo')
            .should('exist')
            .type('funciona')
    })

    it('Uso do find', () => {
        cy.get('#buttonList')
            .click()

        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        //Devo evitar o uso do 'find' quando a tela for montada de forma assyncrona.
        cy.get('#lista li span')
            .should('contain', 'Item 1')
            .and('contain', 'Item 1')

    })

    it.only('Uso do timeout', () => {
        cy.get('#buttonDelay')
            .click()

        cy.get('#novoCampo', { timeout: 1000 })
            .should('exist')
    })
})