/// <reference types = "cypress" />

describe('Should group tests...', () => {

    it.only("Execute only this...", () => {

    })

    it.skip("An skiped internal test... 2", () => {

    })

    describe('Should group tests... 2', () => {

        it("An internal group test...", () => {

        })
    })
})


// Skip -> Pula um ou mais testes
// Only -> Executa somente aquele teste