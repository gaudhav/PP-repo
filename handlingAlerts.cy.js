/// <reference types = "Cypress"/> 

describe('handling alerts',()=>{
    it('handling javascript alert',()=>{

        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html');
        cy.get('#button1').click();
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contain('I am an alert box!');
        })
    })

    it('handling confirmation alert --> click "OK" button',()=>{

        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html');
        cy.get('#button4').click();
        cy.on('window:confirm',(txt)=>{
            expect(txt).to.contain('Press a button!');  
        })
        cy.get('[id="confirm-alert-text"]').should('have.text','You pressed OK!')
    })

    it('handling confirmation alert --> click "Cancel" button',()=>{

        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html');
        cy.get('#button4').click();
        cy.on('window:confirm',(txt)=>{
            expect(txt).to.contain('Press a button!');  
            return false;
        })
        cy.get('[id="confirm-alert-text"]').should('have.text','You pressed Cancel!')
    })

    it('handling promt alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Welcome to my universe')
        })
        cy.get('[onclick="jsPrompt()"]').click();
        cy.get('[id="result"]').should('have.text','You entered: Welcome to my universe');
    })

    it.only('handling promt alert ---> click on cancel', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns(null)
        })
        cy.get('[onclick="jsPrompt()"]').click();
        cy.get('[id="result"]').should('have.text','You entered: null');
    })

   
    
})