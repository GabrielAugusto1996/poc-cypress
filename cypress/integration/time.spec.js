/// <reference types = "cypress" />

describe('Work with alerts', () => {

    //Executa antes de todos os testes
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

    })

    it('Going back to the past', () => {
        //Atenção: O mês é anexado no valor '0'
        const data = new Date(2012, 3, 10, 15, 23, 50)

        cy.clock(data.getTime())

        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '10/04/2012')
    })
})