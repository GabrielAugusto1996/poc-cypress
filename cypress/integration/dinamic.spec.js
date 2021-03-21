/// <reference types="cypress" />

describe('Dinamic tests', () => {

    beforeEach(() => {
        cy.reload()
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']

    foods.forEach(food => {

        it(`Cadastro com a comida - ${food}`, () => {

            cy.get('#formNome').type('Usuario')
            cy.get('#formSobrenome').type('Teste')
            cy.get('[name=formSexo][value=M]').click()
            cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`).click()
            cy.get('#formEscolaridade').select('Mestrado')
            cy.get('#formEsportes').select('Corrida')

            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        })
    })
})