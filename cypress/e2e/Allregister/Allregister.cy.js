describe("Allregister", () => {
  it("tests Allregister", () => {
    cy.viewport(1833, 1073);
    cy.visit("http://localhost:3000/All-register");
    cy.get("img").click();
    cy.get("ul > a").click();
    cy.get("article:nth-of-type(1) > figure").click();
    cy.get("article:nth-of-type(1) > figure").click();
    cy.get("article:nth-of-type(1) > figure").click();
    cy.get("article:nth-of-type(1) > div").click();
    cy.get("article:nth-of-type(1) span:nth-of-type(2)").click();
    cy.get("article:nth-of-type(1) span:nth-of-type(3)").click();
    cy.get("article:nth-of-type(1) span:nth-of-type(4)").click();
    cy.get("article:nth-of-type(2) > figure").click();
    cy.get("article:nth-of-type(2) > div").click();
  });
});
