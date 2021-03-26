const locators = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        SETTINGS: '[data-test=menu-settings]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACOES: '[data-test=menu-movimentacao] > .fas',
        HOME: '[href="/"]'
    },
    CONTAS: {
        NOME: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        FN_XP_BTN_ALTERAR: nomeConta => `//td[contains(., '${nomeConta}')]/..//i[@class='far fa-edit']`
    },
    MOVIMENTACAO: {
        DESCRICAO: '[data-test=descricao]',
        VALOR: '[data-test=valor]',
        ENVOLVIDO: '[data-test=envolvido]',
        CONTA: '[data-test=conta]',
        BTN_SALVAR: '.btn-primary'
    },
    EXTRATO: {
        LINHAS: '.list-group > li',
        FN_XP_BUSCA_ELEMENTO: (nomeMovimentacao, valorMovimentacao) => `//span[contains(.,'${nomeMovimentacao}')]/following-sibling::small[contains(.,'${valorMovimentacao}')]`
    },
    HOME: {
        FN_XP_ENCONTRAR_CONTA: (nomeConta) => `//td[contains(., '${nomeConta}')]`
    },
    MESSAGE: '.toast-message'
}

export default locators;