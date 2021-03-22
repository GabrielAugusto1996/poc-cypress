/// <reference types = "cypress" />

describe('Work with Time', () => {

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

    it.only('Goes to the future', () => {
        cy.get('#buttonTimePassed').click()

        cy.get('#resultado > span').invoke('text').should('gt', 15731)

        cy.clock()
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 0)

        cy.tick(5000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('gte', 5000)
    })
})