describe('handling Iframe',()=>{
  
    it('handling Iframe', function () { 

        cy.visit('https://webdriveruniversity.com/IFrame/index.html');
        cy.get('[id="frame"]').its('0.contentDocument.body')
        .then((iframeBody) =>{
           cy.wrap(iframeBody).as('testFrame');
        })
        cy.get('@testFrame').find('[id="button-find-out-more"]').click();
        cy.get('@testFrame').find('[id="myModal"]').contains('Close').click();


      //   cy.visit('https://webdriveruniversity.com/IFrame/index.html');
      //   cy.get('[id="frame"]').its('0.contentDocument.body')
      //   .then(cy.wrap).as('testFrame');
      //   cy.get('@testFrame').find('[id="button-find-out-more"]').click();
      //   cy.get('@testFrame').find('[id="myModal"]').should('contain','Welcome to webdriveruniversity.com')
      //   cy.get('@testFrame').find('[id="myModal"]').contains('Close').click();
        
     })
})