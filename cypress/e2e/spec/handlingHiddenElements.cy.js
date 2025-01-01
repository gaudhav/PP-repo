

describe('handling hidden element',()=>{
  
    it('handling hidden element', function () { 
        cy.visit('https://www.letskodeit.com/practice')
        cy.wait(3000)
        cy.get('div.mouse-hover-content').invoke('show'); // "display:none" css style property is mandatory
                                                    // for invoke('show') method to work
        cy.contains('Top').click();
     })

        
    
})