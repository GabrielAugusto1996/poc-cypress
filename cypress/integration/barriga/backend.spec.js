/// <reference types = "cypress" />

describe('Should test at a functional level', () => {

    let token

    before(() => {
        cy.getToken('biga00145@gmail.com', 'Zelda-123').then($token => {
            token = $token
        })
    })

    beforeEach(() => {
    })

    it('Should make a login', () => {
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

    it('Should create an account', () => {
        cy.request({
            method: 'POST',
            url: 'http://barrigarest.wcaquino.me/contas',
            body: {
                nome: "Conta via rest"
            },
            headers: {
                Authorization: `JWT ${token}`
            }
        }).as('response')

        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'Conta via rest')
        })
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