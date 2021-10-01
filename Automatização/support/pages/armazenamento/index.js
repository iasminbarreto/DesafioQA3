// ações de interação com a página
// armazenar o nome e o preço do produto para posterior verificação

const el = require ("./elements").ELEMENTS;

class armazenamento {
    acessarSite() {
        cy.visit(el.site);
    }
    pesquisarProduto () {
        cy.get(el.pesquisa).type("Minhas Ordens de Serviço {enter}");
    }
    armazenarNome (){
        cy.get(el.títuloProduto).invoke('text').as('Produto1');
        cy.get(el.verMais).click();
    }
    armazenarPreço () {
        cy.get(el.títuloPreço).invoke('text').as('Preço1');
    }    
    
}

export default new armazenamento ();


