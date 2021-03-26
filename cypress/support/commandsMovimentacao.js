import loc from './locators'

Cypress.Commands.add('acessarMenuMovimentacao', () => {
    cy.get(loc.MENU.MOVIMENTACOES).click()
})

Cypress.Commands.add('inserirMovimentacao', (descricao, valor, envolvido, isPaga, conta) => {
    cy.get(loc.MOVIMENTACAO.DESCRICAO).type(descricao)
    cy.get(loc.MOVIMENTACAO.VALOR).type(valor)
    cy.get(loc.MOVIMENTACAO.ENVOLVIDO).type(envolvido)
    cy.get(loc.MOVIMENTACAO.CONTA).select(conta)

    if (isPaga) {
        cy.get('[data-test=status]').click()
    }

    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
})