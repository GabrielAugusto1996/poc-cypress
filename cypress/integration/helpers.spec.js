/// <reference types = "cypress" />

describe('Helpers...', () => {
    //Executa antes de todos os testes
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

    })

    //Executa antes de cada um dos testes
    beforeEach(() => {
        cy.reload()
    })

    it('Wrap', () => {
        const obj = { nome: 'User', idade: 20 }

        expect(obj).to.have.property('nome')

        cy.wrap(obj).should('have.property', 'nome')

        cy.get('#formNome')
            .then($el => {
                cy.wrap($el).type('funciona?')
            })

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => {
            console.log('Encontrei o primeiro botão.')
        })

        cy.wrap(promise).then($num => console.log($num))

        cy.get('#buttonList').then(() => {
            console.log('Encontrei o segundo botão.')
        })

        //Observação: Um ponto importante de Should x Then. O Should ignora o valor do retorno, quando tivermos esse caso devemos utilizar o then.
        cy.wrap(1).then($num => {
            return 2
        }).should('be.equal', 2)
    })
})