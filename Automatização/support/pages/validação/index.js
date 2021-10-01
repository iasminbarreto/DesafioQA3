import armazenamento from "../armazenamento"
const el = require ("./elements").ELEMENTS

class validação {

    validaçãoNome () {
        cy.visit(el.site);
        cy.get(el.pesquisa).type("Minhas Ordens de Serviço {enter}");
        cy.get(el.verMais).click();
        cy.get(el.validarNome).should('contain', this.Produto1);
    }
    validaçãoFinal () {
        cy.get(el.compreAgora).click();
        cy.get(el.próximo).click();
        cy.get(el.colocarnoCarrinho).click();
        cy.get(el.preçoNoCarrinhoDeCompras).should('contain', this.Preço1);
        cy.get(el.nomeNoCarrinhoDeCompras).should('contain', this.Produto1);
    }

}

export default new validação ();

