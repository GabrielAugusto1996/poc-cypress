/// <reference types = "cypress" />

import loc from '../../support/locators'
import '../../support/commandsConta'
import '../../support/commandsMovimentacao'
import buildEnv from '../../support/buildEnv'

describe('Should test at a frontend level', () => {

    after(() => {
        cy.clearLocalStorage()
    })

    before(() => {
        buildEnv()
        cy.login('biga00145@gmail.com', 'senha errada')
    })

    beforeEach(() => {
        cy.server()
    })

    it('Should create an account', () => {
        cy.route({
            method: 'POST',
            url: '/contas',
            response: {
                id: 3,
                nome: 'Conta de teste',
                visivel: true,
                usuario_id: 1
            }
        }).as('saveConta')

        cy.acessarMenuConta()

        cy.route({
            method: 'GET',
            url: '/contas',
            response: [
                {
                    id: 1,
                    nome: 'Carteira',
                    visivel: true,
                    usuario_id: 1
                },
                {
                    id: 2,
                    nome: 'Banco',
                    visivel: true,
                    usuario_id: 1
                },
                {
                    id: 3,
                    nome: 'Conta de teste',
                    visivel: true,
                    usuario_id: 1
                }
            ]
        }).as('contaSave')

        cy.inserirConta('Conta de teste')
        cy.get(loc.MESSAGE).should('exist').and('contain', 'Conta inserida')
    })

    it('Should update an account', () => {
        cy.route({
            method: 'PUT',
            url: '/contas/**',
            response: {
                id: 1,
                nome: 'Conta alterada',
                visivel: true,
                usuario_id: 1
            }
        }).as('contaAlterada')

        cy.acessarMenuConta()

        cy.route({
            method: 'GET',
            url: '/contas',
            response: [
                {
                    id: 1,
                    nome: 'Conta alterada',
                    visivel: true,
                    usuario_id: 1
                },
                {
                    id: 2,
                    nome: 'Banco',
                    visivel: true,
                    usuario_id: 1
                }
            ]
        }).as('contasAlterada')

        cy.get(loc.CONTAS.NOME).clear()
        cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR('Carteira')).click()
        cy.get(loc.CONTAS.NOME).type('Conta alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('exist').and('contain', 'Conta atualizada')
    })

    it.only('Should not create an account with same name', () => {
        cy.route({
            method: 'POST',
            url: '/contas',
            response: {
               error: 'Já existe uma conta com esse nome!'
            },
            status: 400
        }).as('saveContaMesmoNome')

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