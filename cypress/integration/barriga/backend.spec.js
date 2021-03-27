/// <reference types = "cypress" />

describe('Should test at a functional level', () => {

    before(() => {
    })

    beforeEach(() => {
    })

    it('Should create an account', () => {
        cy.request({
            method: 'POST',
            url: 'http://barrigarest.wcaquino.me/signin',
            body: {
                email: "biga00145@gmail.com",
                senha: "Zelda-123",
                redirecionar: false
            }
        }).its('body.token').should('not.be.empty')

    })

    it('Should update an account', () => {
    })

    it('Should not create an account with same name', () => {
    })

    it('Should create a new movimentation', () => {
    })

    it('Should get balance', () => {
    })

    it('Should remove a transaction', () => {
    })
})