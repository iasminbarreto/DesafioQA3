///<reference types="cypress"/>

import armazenamento from '../support/pages/armazenamento';
import validação from "../support/pages/validação";

describe("Validação das informações referente a um produto", () => {
    beforeEach(() => {


        armazenamento.acessarSite ();
        armazenamento.pesquisarProduto ();
        armazenamento.armazenarNome ();
        armazenamento.armazenarPreço();
    })
    it( "Acessar o site e pesquisar por produto", function () {
        validação.validaçãoNome ();
        validação.validaçãoFinal ();
    })
})
        
//<reference types="cypress"/>

// import armazenamento from '../support/pages/armazenamento';
// import validação from "../support/pages/validação";
// describe("Validação das informações referente a um produto", () => {
    // beforeEach(() => {

        // armazenar o nome e o preço do produto para posterior verificação
        // cy.visit("https://totvs.store/");
        // cy.get('#search').type("Minhas Ordens de Serviço {enter}");
        // cy.get('[href="https://totvs.store/br/produto/minhas-ordens-de-servico.html"] > .product-card-title').invoke('text').as('Produto1');
        // cy.get('[href="https://totvs.store/br/produto/minhas-ordens-de-servico.html"] > .product-card-footer > .price-box > .price-show-more > span').click();
        // cy.get('#from-1068 > .price').invoke('text').as('Preço1');
        // it( "Acessar o site e pesquisar por produto", function () {
        // cy.visit("https://totvs.store/");
        // acessar site
        // cy.get('#search').type("Minhas Ordens de Serviço {enter}");
        // pesquisar produto
        // cy.get('[href="https://totvs.store/br/produto/minhas-ordens-de-servico.html"] > .product-card-footer > .price-box > .price-show-more > span').click();
        // ver mais
        // cy.get('.base').should('contain', this.Produto1);
        // verificar o nome do produto na página do produto
        // cy.get('.bundle-actions > #bundle-range > span').click();
        // compre agora 
        // cy.get('[aria-hidden="false"] > a').click();
        // próximo
        // cy.get('[aria-hidden="false"] > a').click();
        // colocar no carrinho 
        // cy.get('.price').should('contain', this.Preço1);
        // verificar o preço do produto no carrinho de compras
        // cy.get('.product-item-name > a').should('contain', this.Produto1);
        //verificar o nome do produto no carrinho de compras



    
