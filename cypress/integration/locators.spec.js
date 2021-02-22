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

    it('', () => {
        
    })

})