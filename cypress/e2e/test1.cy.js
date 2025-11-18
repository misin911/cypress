describe("New attestation test", ()=>{
    it('My new project', ()=>{
        cy.visit("https://parabank.parasoft.com/");
        cy.get(".logo").should("be.visible")
    })
})