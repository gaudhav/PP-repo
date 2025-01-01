describe('mousehover',function(){

  it('preforming mousehover action', function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        // cy.get('div.dropdown.hover').trigger('mouseover')
        // cy.get('[class="dropdown-content"]').eq(0).should('have.contain','Link 1');

        cy.get('div.dropdown.hover').invoke('trigger','mouseover')
        cy.get('[class="dropdown-content"]').eq(0).should('have.contain','Link 1');
  })

  it('preforming mouse drag and drop action without plugin', function(){
    cy.visit('https://webdriveruniversity.com/Actions/index.html')
    cy.get('[id="draggable"]').trigger('mousedown',{which:1});
    cy.get('[id="droppable"]').trigger('mousemove').trigger('mouseup',{force:true})
    cy.get('[id="droppable"]').should('have.contain','Dropped!');
  })

// run the following command in terminal :-  npm install --save-dev @4tw/cypress-drag-drop
//add plugin in command.js :- require('@4tw/cypress-drag-drop') 
  it('preforming mouse drag and drop action', function(){
    cy.visit('https://webdriveruniversity.com/Actions/index.html')
    cy.get('[id="draggable"]').drag('[id="droppable"]',{force: true});
    cy.get('[id="droppable"]').should('have.contain','Dropped!');
  })


  it('preforming holding and releasing action', function(){
    cy.visit('https://webdriveruniversity.com/Actions/index.html')
    cy.get('[id="click-box"]').trigger('mousedown'); //mousedown :- press and hold the mouse button 
    cy.wait(1000);
    cy.get('[id="click-box"]').trigger('mouseup'); //mouseup :- release the mouse button
    cy.get('[id="click-box"]').should('have.contain','Dont release me!!!');
  })
})