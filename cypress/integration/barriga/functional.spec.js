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

    it('Should create an account', () => {
        cy.get('[data-test=menu-settings] > .fas').click()
        cy.get('[href="/contas"]').click()

        cy.get('[data-test=nome]').type('Conta de teste')
        cy.get('.btn').click()

        cy.get('.toast-message')
            .should('exist')
            .and('contain', 'Conta inserida')
    })

    it.only('Should update an account', () => {
        cy.get('[data-test=menu-settings] > .fas').click()
        cy.get('[href="/contas"]').click()

        cy.xpath("//table//td[contains(., 'Conta de teste')]/..//i[@class='far fa-edit']")
            .click()

        cy.get('.btn').click()

        cy.get('.toast-message')
            .should('exist')
            .and('contain', 'Conta atualizada')
    })
})