/// <reference types = "cypress" />

import loc from '../../support/locators'
import '../../support/commandsConta'

describe('Should test at a functional level', () => {

    //Executa antes de todos os testes
    before(() => {
        cy.login('biga00145@gmail.com', 'Zelda-123')
        cy.resetApp()
    })

    it('Should create an account', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta de teste')
        cy.get(loc.MESSAGE).should('exist').and('contain', 'Conta inserida')
    })

    it('Should update an account', () => {
        cy.acessarMenuConta()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('exist').and('contain', 'Conta atualizada')
    })
})