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

    it.only('Deverá selecionar todos usando o each', () => {
        cy.get('#formNome').type('Usuario')
        cy.get('#formSobrenome').type('Teste')
        cy.get('[name=formSexo][value=M]').click()
        
        cy.get('[name=formComidaFavorita]').each($el => {
            if($el.val() != 'vegetariano')
                cy.wrap($el).click()
        })
        
        cy.get('#formEscolaridade').select('Mestrado')
        cy.get('#formEsportes').select('Corrida')

        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
    })
})