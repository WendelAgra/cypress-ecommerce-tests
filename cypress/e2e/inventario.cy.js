// cypress/e2e/inventario.cy.js

describe('Testes da Página de Inventário', () => {

  // Este beforeEach garante que estamos logados antes de cada teste de inventário
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce');
  });

  it('Deve permitir adicionar um produto ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });

  it('Deve ordenar os produtos por nome de Z a A', () => {
    cy.get('[data-test="product-sort-container"]').select('za');
    cy.get('.inventory_item_name').then(($items) => {
      const itemTexts = $items.map((index, el) => Cypress.$(el).text()).get();
      const sortedItemTexts = [...itemTexts].sort().reverse();
      expect(itemTexts).to.deep.equal(sortedItemTexts);
    });
  });

  it('Deve permitir remover um produto do carrinho a partir da página de inventário', () => {
    // Adiciona o item primeiro
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    
    // Remove o item
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});