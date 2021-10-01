///<reference types="cypress"/>
describe("Validação das informações referente a um produto", () => {
    beforeEach(() => {
        cy.visit("https://totvs.store/");
        cy.get('#search').type("Minhas Ordens de Serviço {enter}");
        cy.get('[href="https://totvs.store/br/produto/minhas-ordens-de-servico.html"] > .product-card-title').invoke('text').as('Produto1');
        cy.get('[href="https://totvs.store/br/produto/minhas-ordens-de-servico.html"] > .product-card-footer > .price-box > .price-show-more > span').click();
        cy.get('#from-1068 > .price').invoke('text').as('Preço1');
    })
    it( "Acessar o site e pesquisar por produto", function () {
        cy.visit("https://totvs.store/");
        cy.get('#search').type("Minhas Ordens de Serviço {enter}");
        cy.get('[href="https://totvs.store/br/produto/minhas-ordens-de-servico.html"] > .product-card-footer > .price-box > .price-show-more > span').click();
        cy.get('.base').should('contain', this.Produto1);
        cy.get('.bundle-actions > #bundle-range > span').click();
        cy.get('[aria-hidden="false"] > a').click();
        cy.get('[aria-hidden="false"] > a').click();
        cy.get('.price').should('contain', this.Preço1);
        cy.get('.product-item-name > a').should('contain', this.Produto1);

    })
})