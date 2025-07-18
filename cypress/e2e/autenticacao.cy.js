// cypress/e2e/autenticacao.cy.js

describe('Testes de Autenticação', () => {

  // O beforeEach visita a página antes de cada teste de autenticação
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('Deve permitir o login com um usuário válido', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('Deve exibir uma mensagem de erro para um usuário bloqueado', () => {
    cy.get('[data-test="username"]').type('locked_out_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible');
  });

  it('Deve permitir ao usuário fazer logout com sucesso', () => {
    // Para testar o logout, primeiro precisamos logar
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Agora testamos o logout
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.url().should('not.include', 'inventory.html');
  });
});