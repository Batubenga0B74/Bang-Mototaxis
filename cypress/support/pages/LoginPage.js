/// cypress/support/pages/LoginPage.js

class LoginPage{
    visit() {
        cy.visit('http://localhost:3000/Register-motors')
      }
      // Método para preencher o campo de e-mail
      fillEmail(email){
        cy.get('#emaill').type(email)
      }
      fillBI(BI){
        cy.get("#Bi").type(BI)
      }
      fillTelefone(telefone){
        cy.get('#telefony').type(telefone)
      }
      fillName(nome){
        cy.get('#Nome').type(nome)
      }
      fillMatricula(Matricula){
        cy.get("#Matricula").type(Matricula)
      }
      fillMoto(Moto){
        cy.get("#Moto").type(Moto)
      }
      submit(){
        cy.get('form').submit()
      }
}
export default new LoginPage()