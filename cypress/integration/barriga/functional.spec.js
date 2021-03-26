/// <reference types = "cypress" />

describe('Should test at a functional level', () => {

    //Executa antes de todos os testes
    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('.input-group > .form-control')
            .type('biga00145@gmail.com')

        cy.get(':nth-child(2) > .form-control')
            .type('Zelda-123')

        cy.get('.btn').click()

        cy.get('.toast-message')
            .should('exist')
            .and('contain', 'Bem vindo,')
    })

    it('...', () => {
        
    })
})