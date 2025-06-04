/// <reference types="cypress" />


describe('Header', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Altere a URL se necessário
    });
  
    it('deve  averiguar a existencia do  main', () => {
   cy.contains('Torne- se um ').should('exist')
   cy.contains('Junte- se à maior plataforma de mototaxistas legalizados de Angola . Trabalhe com segurança, confiança e apoio jurídico completo .').should('exist')
    cy.contains('Pronto para começar sua jornada Bang?').should('exist')

    });
  });