import LoginPage from "../../support/pages/LoginPage";

describe('cadastro',()=>{
    it('dastrar com dados valido',()=>{
        cy.viewport('iphone-x')
        LoginPage.visit()
        LoginPage.fillEmail('usuario@teste.com')
        LoginPage.fillBI('12345LA1234')
        LoginPage.fillMatricula('123HB123')
        LoginPage.fillMoto("Honda")
        LoginPage.fillName("Freudy Batuga")
        LoginPage.fillTelefone("987789098")
        LoginPage.submit()

        cy.get('form') // ou outro seletor mais específico, se quiser
        .should('exist')
        .and('be.visible')
        .invoke('width')
        .should('be.gte', 300)


    })
})