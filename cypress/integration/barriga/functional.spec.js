/// <reference types = "cypress" />

import loc from '../../support/locators'
import '../../support/commandsConta'
import '../../support/commandsMovimentacao'

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
        cy.get(loc.CONTAS.NOME).clear()
        cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR('Conta para alterar')).click()
        cy.get(loc.CONTAS.NOME).type('Conta para alterar')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('exist').and('contain', 'Conta atualizada')
    })

    it('Should not create an account with same name', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta mesmo nome')
        cy.get(loc.MESSAGE).should('exist').and('contain', 'Request failed with status code 400')
    })

    it('Should create a new movimentation', () => {
        cy.acessarMenuMovimentacao()
        cy.inserirMovimentacao('Nova Movimentação', 15.42, 'Gabriel', true, 'Conta para movimentacoes')
        cy.get(loc.MESSAGE).should('exist').and('contain', 'Movimentação inserida')
        cy.get(loc.EXTRATO.LINHAS).should('have.length', 7)
        cy.xpath(loc.EXTRATO.FN_XP_BUSCA_ELEMENTO('Nova Movimentação', 15)).should('exist')
    })

    it('Should get balance', () => {
        cy.get(loc.MENU.HOME).click()
        cy.wait(500)
        cy.xpath(loc.HOME.FN_XP_ENCONTRAR_CONTA('Conta para saldo')).should('exist')
    })

    it('Should remove a transaction', () => {
        cy.get(loc.MENU.EXTRATO).click()
        cy.xpath(loc.EXTRATO.FN_XP_BUSCA_ELEMENTO_EXCLUSAO('Movimentacao para exclusao')).click()
        cy.get(loc.MESSAGE).should('exist').and('contain', 'Movimentação removida')
    })
})