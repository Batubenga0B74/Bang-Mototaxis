
describe("CENTRAL DE CADASTRAMENTO DE MOTORIZADA",()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/Register-motors');
    });
    it('preeche os campos  obrigatorio e envia o formulário',()=>{
        cy.get("#Nome").type("joão")
        cy.get("#Matricula").type("LD-00-A12A")
        cy.get("#telefony").type("934607031")
        cy.get("#Moto").type("Honda")
        cy.get("#Bi").type("12431LA098")
        cy.get("#emaill").type("joao@gmail.com")
        cy.get('button[type="submit"]').click()
    })
    it('erro ao enviar formulário vazio',()=>{
        cy.get("#Nome").type(" ")
        cy.get("#Matricula").type(" ")
        cy.get("#telefony").type(" ")
        cy.get("#Moto").type(" ")
        cy.get("#Bi").type(" ")
        cy.get("#emaill").type(" ")
        cy.get('button[type="submit"]').click()
        cy.contains('Preencha todos os campos obrigatórios').should('exist')
      

    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',()=>{
        cy.get("#Nome").type("joão")
        cy.get("#Matricula").type("LD-00-A12A")
        cy.get("#telefony").type("934607031")
        cy.get("#Moto").type("Honda")
        cy.get("#Bi").type("12431LA098")
        cy.get("#emaill").type("123")
        cy.get('button[type="submit"]').click()
        cy.contains(" please include ").should("exist")
    })

})