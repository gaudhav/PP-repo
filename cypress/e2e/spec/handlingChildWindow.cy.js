/// <reference types = "Cypress"/> 

describe('handling child windows',()=>{
  
    it('handling child windows', function () { 
        cy.visit('https://webdriveruniversity.com/')
        cy.get('[id="contact-us"]').invoke('removeAttr','target').click();
        cy.url().should('include','Contact-Us');
        cy.wait(2000);
        cy.go('back')
        cy.url().should('equal','https://webdriveruniversity.com/')
     })
})