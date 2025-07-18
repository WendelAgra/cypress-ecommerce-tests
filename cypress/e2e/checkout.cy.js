// cypress/e2e/checkout.cy.js

describe('Testes do Fluxo de Checkout', () => {

  // Garante que estamos logados antes de cada teste de checkout
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce');
  });

  it('Deve permitir ao usuário finalizar a compra com sucesso', () => {
    // Adiciona um item ao carrinho para poder fazer o checkout
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();

    // Inicia o fluxo de checkout
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('João');
    cy.get('[data-test="lastName"]').type('Silva');
    cy.get('[data-test="postalCode"]').type('01001000');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  });

  it('Deve exibir uma mensagem de erro ao tentar fazer checkout sem preencher os dados', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('be.visible');
  });
});