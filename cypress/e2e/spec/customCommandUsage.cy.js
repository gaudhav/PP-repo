describe('customCommandUsage',()=>{
  
    it('customCommandUsage', function () { 
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.autoSuggesionDropdown('g','Grapes');    
     })

     it('customCommandUsage1', function () { 
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
       cy.login("Admin",'admin123');         
     })

     it('customCommandUsage1', function () { 

        cy.visit(Cypress.env('url'));
        cy.get('[name="username"]').type(Cypress.env('username'));
        cy.get('[name="password"]').type(Cypress.env('password'));
        cy.get('form').submit();
    })

    it.only('customCommandUsage1', function () { 
        cy.visit(Cypress.env('url'));
        cy.login(Cypress.env('username'),Cypress.env('password'));         
    })
 
})
