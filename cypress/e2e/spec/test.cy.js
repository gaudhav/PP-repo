/// <reference types ="cypress" />

describe('learing methods',function(){

    it('uses of and method',function(){
        // cy.visit('https://www.orangehrm.com/');
        // cy.get('[class*="btn-contact-sales"]').last().should('be.visible')
        // .and('have.text','Book a Free Demo')
        // .and('be.enabled')
        // .and('not.be.disabled');
         
        // cy.get('[class="container"] h3').first().contains('We have 5 million + active users worldwide')
        // .and('have.class','text-center');
        
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html');
        // cy.get('ul.traversal-drinks-list').children()
        // .should('not.be.empty')
        // .and(($li) => {
        //       expect($li).to.have.length(5)
        //       expect($li.first()).to.contain('Coffee')
        // })

        cy.get('.traversl-buttons input',{timeout:10000}).should('have.value','Input');
    });

    it('as method',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html');
        cy.get('[value="Input"]').parent().find('a').as('button');
        cy.get('@button').should('have.attr','role').and('eq','button')
    });

    it('check method',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.get('#radio-buttons input').eq(0).check();
        //cy.get('[type="radio"]').check(); // select all radiobuttons
        //cy.get('[type="checkbox"]').check(); // select all checkboxes
        cy.get('[type="checkbox"]').check('option-1');
        cy.get('[type="checkbox"]').check(['option-2','option-4']);
        cy.get('#checkboxes input').eq(2).uncheck({force:true});  //to uncheck invisible checkbox
    });

    it('click method', function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.get('[type="checkbox"]').click({multiple:true}) // to check multiple options
    });

    it('cookies and storage method', function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.wait(2000);
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.wait(3000);
        cy.pause();
        cy.clearCookies();
        cy.clearLocalStorage('/core/i18n/messages');
        cy.clearAllSessionStorage();
    })

    it.only('each method', function(){
      
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html');
        cy.get('.traversal-drinks-list li').each((element,index,list)=>{
            cy.log(element.text());
        })

    })
})