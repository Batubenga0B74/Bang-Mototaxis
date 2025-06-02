/// <reference types="cypress" />


describe('Header', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Altere a URL se necessário
  });

  it('deve exibir a logo no header', () => {
    cy.get('img[alt="logo"]').should('be.visible');
    cy.get('li').first().should('have.text', 'início');
    cy.get('li').eq(1).should('have.text','Benefícios')
    cy.get('li').eq(2).should('have.text','FAQ')
  });
});
