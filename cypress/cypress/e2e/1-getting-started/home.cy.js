/// <reference types="cypress" />


describe('Header', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Altere a URL se necessário
  });

  it('deve exibir a logo no header', () => {
    cy.get('img[alt="logo"]').should('be.visible');
  });
});
