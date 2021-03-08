/// <reference types = "cypress" />

describe('Work with basic elements', () => {

    //Executa antes de todos os testes
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

    })

    //Executa antes de cada um dos testes
    beforeEach(() => {
        cy.reload()
    })

    it('Using Jquery Selector', () => {
        cy.get('table#tabelaUsuarios > tbody > tr:eq(0) td:nth-child(3) > input').click()
    })

})

//Curiosidade, quando você utiliza o eq, a sua busca irá começar na posição '0' enquanto o nth-child a sua busca irá começar na posicação '1'
//Mais detalhes: https://www.w3schools.com/jquery/jquery_ref_selectors.asp