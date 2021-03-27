/// <reference types = "cypress" />

describe('Should test at a functional level', () => {

    let token

    before(() => {
        cy.getToken('biga00145@gmail.com', 'Zelda-123').then($token => {
            token = $token
        })
    })

    beforeEach(() => {
        cy.resetRest(token)
    })

    it('Should make a login', () => {
        cy.request({
            method: 'POST',
            url: '/signin',
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
            url: '/contas',
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
        cy.getAccountByName('Conta para alterar', token).then(res => {
            cy.request({
                method: 'PUT',
                url: `/contas/${res.body[0].id}`,
                body: {
                    nome: "conta alterada via rest"
                },
                headers: {
                    Authorization: `JWT ${token}`
                }
            }).as('response')
        })

        cy.get('@response').its('status').should('be.equal', 200)
    })

    it('Should not create an account with same name', () => {
        cy.request({
            method: 'POST',
            url: '/contas',
            body: {
                nome: "Conta mesmo nome"
            },
            headers: {
                Authorization: `JWT ${token}`
            },
            failOnStatusCode: false
        }).then(res => {
            expect(res.status).to.be.equal(400)
            expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!')
        })
    })

    it('Should create a new movimentation', () => {
        cy.getAccountByName('Conta para movimentacoes', token).then(res => {
            cy.request({
                method: 'POST',
                url: '/transacoes',
                body: {
                  conta_id: res.body[0].id,
                  data_pagamento: Cypress.moment().add({days: 1}).format('DD/MM/YYYY'),
                  data_transacao: Cypress.moment().format('DD/MM/YYYY'),
                  descricao: "desc",
                  envolvido: "inter",
                  status: true,
                  tipo: "REC",
                  valor: "123"
                },
                headers: {
                    Authorization: `JWT ${token}`
                }
            }).as('response')
        })

        cy.get('@response').its('status').should('be.equal', 201)
        cy.get('@response').its('body.id').should('exist')
    })

    it('Should get balance', () => {
    })

    it('Should remove a transaction', () => {
    })
})