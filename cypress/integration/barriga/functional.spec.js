/// <reference types = "cypress" />

import loc from '../../support/locators'

describe('Should test at a functional level', () => {

    //Executa antes de todos os testes
    before(() => {
        cy.login('biga00145@gmail.com', 'Zelda-123')
        cy.resetApp()
    })

    it('Should create an account', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTAS.NOME).type('Conta de teste')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('exist').and('contain', 'Conta inserida')
    })

    it('Should update an account', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('exist').and('contain', 'Conta atualizada')
    })
})