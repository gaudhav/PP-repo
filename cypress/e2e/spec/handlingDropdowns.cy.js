
describe('handling dropdowns',()=>{
  
    it('handling autosuggesion dropdowns', function () { 
        // autosuggesion dropdow handling (dynamic dropdown) --> apporch 1
        cy.visit('https://www.google.com/')
        cy.get('[title="Search"]').type('cypress automation');
        // cy.get('[class="wM6W7d"]>span').as('options')
        // cy.get('@options').should('have.length',13)
        // cy.get('@options').each(($ele,index,list)=>{
        //      if($ele.text()=="cypress automation tutorial"){
        //         cy.wrap($ele).click();
        //      }
        // })
        // cy.url().should('include','cypress+automation+tutorial');

        // autosuggesion dropdow handling --> apporch 2
        cy.get('[class="wM6W7d"]>span').contains('cypress automation tutorial').click();
        cy.url().should('include','cypress+automation+tutorial');
    })

    it('handling autosuggesion dropdowns', function () {    
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('[id="autosuggest"]').type('app')
        cy.get('[class="ui-menu-item"]').should('have.length',6).and('contain','Mobile App Automation')
        cy.get('[class="ui-menu-item"]').each(($ele)=>{
            const txt = $ele.text();
            if(txt =='Appium'){
                cy.wrap($ele).click();
            }
        })
        cy.get('[id="autosuggest"]').should('have.value','Appium')
    })

    it('handling dropdown which having select class', function () {    
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.get('#dropdowm-menu-1').select('Python').should('have.value','python'); //by using html text
        cy.wait(2000);
        cy.get('#dropdowm-menu-2').select('testng').should('have.value','testng'); //by using value
        cy.wait(2000);
        cy.get('#dropdowm-menu-3').select(2).should('have.contain','JavaScript');  //by using index
        cy.wait(2000);
        cy.get('#fruit-selects').select('Apple',{force:true}).should('have.value','apple');
    })

    it.only('handling multiselect dropdown', function () {    
        cy.visit('https://semantic-ui.com/modules/dropdown.html#multiple-selection');
        cy.wait(2000);
        cy.get('[name="skills"]').first()
            .select(['Graphic Design', 'Ember', 'Javascript'], { force: true })
            .invoke('val')
            .should('deep.equal', ['design', 'ember', 'javascript']);
    })
})