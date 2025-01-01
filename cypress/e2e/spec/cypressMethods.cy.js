/// <reference types = "Cypress"/> 


describe('test suite', function () {

    it('test case 18', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.fixture('example').then((data) => {
            cy.get('[name="username"]').type(data.username);
            cy.get('[name="password"]').type(data.password);
        })
        cy.screenshot('ss1', { scale: true });
        cy.get('[type="submit"]').click();
        cy.pause();
        cy.screenshot('HP');
        cy.wait(3000);
        cy.screenshot('FP', { capture: "fullPage" });
        cy.pause();
        cy.screenshot({ clip: { x: 20, y: 20, width: 400, height: 300 } });
        cy.pause();
    })

    it('test case 19', function () {
        cy.visit('https://docs.cypress.io/api/commands/scrollintoview');
        cy.get('[class="footer footer--dark"]').scrollIntoView({ duration: 3000 });
    })

    it('test case 20 --- > handling dropdown which having select tagname', function () {
        // cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        // cy.get('#dropdowm-menu-1').select('Python').should('have.value','python'); //by using html text
        // cy.wait(2000);
        // cy.get('#dropdowm-menu-2').select('testng').should('have.value','testng'); //by using value
        // cy.wait(2000);
        // cy.get('#dropdowm-menu-3').select(2).should('have.contain','JavaScript');  //by using index
        // cy.wait(2000);
        // cy.get('#fruit-selects').select('Apple',{force:true}).should('have.value','apple');

        //multiselect dropdowm
        cy.visit('https://semantic-ui.com/modules/dropdown.html#multiple-selection');
        cy.wait(2000);
        cy.get('[name="skills"]').first()
            .select(['Graphic Design', 'Ember', 'Javascript'], { force: true })
            .invoke('val')
            .should('deep.equal', ['design', 'ember', 'javascript']);
    })

    it('uploading file scenarioes', function () {
         
        // for selectFile() input tag is necessory

        //cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
        //cy.get('input#myFile').selectFile('cypress/fixtures/logo 2.jpeg',{action:"drag-drop"})
        // cy.get('input#myFile').selectFile('cypress/fixtures/logo 2.jpeg')
        // cy.wait(2000);
        // cy.get('[id="submit-button"]').click();
        // cy.on('window:alert', (txt) => {
        //     expect(txt).to.contains('Your file has now been uploaded!');
        // })

        // cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        // cy.get('input#filesToUpload').selectFile([
        //     'cypress/fixtures/logo 2.jpeg',
        //     'cypress/fixtures/New Document.txt',
        //     'cypress/fixtures/New Text Document.txt'
        // ])
        // cy.get('#fileList li').should('have.length',3);


        // cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        // cy.readFile('cypress/fixtures/New Document.txt').as('myFile');
        // cy.get('input#filesToUpload').selectFile('@myFile')
        // cy.get('#fileList li').should('have.length',1);

        // upload file without input tag

        // npm install --save-dev cypress-file-upload; run this command in terminal
        // add the plugin --> import 'cypress-file-upload';  in command.js file
        cy.visit('https://uploadnow.io/upload')
        cy.get('.uploader_dragdrop_inner__Lx6_F button').attachFile('logo 2.jpeg',{ subjectType: 'drag-n-drop' });
        cy.contains('Validate and upload').click();
        cy.wait(6000);
        cy.get('[class*="alerts_alert__Io_sc alerts_success"]').contains('1 file uploaded')
        .should('be.visible')
    })

    it('test case 21', function () {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.fixture('example').then((data) => {
            cy.get('[name="username"]').type(data.username);
            cy.get('[name="password"]').type(data.password);
        })
        cy.get('[type="submit"]').click();
        cy.setCookie('username','Admin');
        cy.setCookie('password','admin123');
        cy.getCookie('username').should(
            'have.property',
            'value',
            'Admin'
          )
          cy.getCookie('password').should(
            'have.property',
            'value',
            'Admadmin123in'
          )
    })

    it('test case 21', function () {
    
        cy.visit('https://books-pwakit.appspot.com/')

        // cy.get('[apptitle="BOOKS"]').shadow().find('app-drawer')
        // .find('nav')
        // .should('have.class','drawer-list');

        cy.get('[apptitle="BOOKS"]').shadow().find('app-drawer')
        .find('nav>a')
        .should('have.length',3);
    })

    it('test case 22', function () {
    
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list li').should(($ele)=>{
             expect($ele).to.have.length(5)
             expect($ele.first()).to.contain('Coffee')
             expect($ele.eq(1)).to.contain('Tea')
             expect($ele.eq(2)).to.contain('Milk')
             expect($ele.eq(3)).to.contain('Espresso')
             expect($ele.last()).to.contain('Sugar')
        })
    })

    it('test case 23', function () {
    
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        //cy.get('.traversal-drinks-list li').siblings().should('have.length',5);
        cy.get('.traversal-drinks-list li').siblings('#tea').should('have.text','Tea');
   
    })

    it('test case 24', function () {
    
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        // console.log(cookie1);
        // console.log(cookie2);
        // console.log(cookie3);
        cy.getCookies().spread((cookie1,cookie2,cookie3)=>{
              expect(cookie1).to.have.property('name','_gat_gtag_UA_228047513_1')
              expect(cookie2).to.have.property('name','_gid')
              expect(cookie3).to.have.property('name','_ga_PHE0KZ9WM9')
           
        })
   
    })

    
    it('test case 25', function () {
    
        cy.task('abc','hello world!')

        // cy.task use in tab32
        // the function or code which need to run/execute outside the browser/cypress we can write that code in cy.task

        // cy.task('db:getTestClinicId').then((testClinicId) => {
        //     if (testClinicId) {
        //       this.testClinicId = testClinicId;
        //       console.log('getClinicId#######', testClinicId);
        //     }
        //   });
    })

    it('test case 26', function () {
    
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-buttons button').then((btn)=>{
            cy.log(btn.text())
            cy.wrap(btn).should('have.class','btn btn-primary')
            cy.wrap(btn).click();
        })
    })

    it('test case 27', function () {
    
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.title().should('include','Orange')
       
    })

    it('test case 28', function () { 
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="checkbox"]').first().type('Option 1');
    })

    it('test case 29', function () { 
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('pummy');
        cy.wait(2000);
        cy.get('input[name="first_name"]').type('{selectAll}{backspace}');
    })

    it('test case 29', function () { 
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.url().should('include','Contact-Us/contactus.html');
    })

    it('test case 30', function () { 
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html',{timeout:10000})
        cy.viewport(768,1024);
        cy.wait(2000)
        cy.viewport(375,667);
        cy.viewport('macbook-11');
        cy.viewport('iphone-xr','landscape');
   
    })

    it('test case 31', function () { 
        //cy .visit('Contact-Us/contactus.html');
        cy.visit('js/js_promise.asp')

    })

    it('test case 32', function () { 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //approch 1
        cy.get('[class*="main orangehrm-login-button"]').then((btnName)=>{
            const txt = btnName.text();
            expect(txt).to.include("Login");
        })
        //approch 2
        cy.get('[class*="main orangehrm-login-button"]').invoke('text').should('contain','Login')

    })
 
    it('test case 33', function () { 
        // verify colur of the webelement
        cy.visit('https://webdriveruniversity.com/Actions/index.html');
        cy.pause();
        cy.get('[id="droppable"] p').should('have.attr','style','background-color: rgb(244, 89, 80); height: 100%;')
        //cy.get('[id="droppable"] p').should('have.css','background-color','rgb(244, 89, 80)');

        
    })

    it('test case 34', function () { 
        // changing the colur of the webelement
        //approach 1 --> changing the colur of the webelement which having value attribute
        // cy.visit('https://play2.automationcamp.ir/');
        // cy.get('[id="favcolor"]').scrollIntoView({duration:2000});
        // cy.get('[id="favcolor"]').should('have.value','#00ced1')
        // cy.pause();
        // cy.get('[id="favcolor"]').invoke('val','#FF0000').trigger('change')
        // cy.get('[id="favcolor"]').should('have.value','#ff0000')

        //approach 2 --> changing the colur of the webelement which dont have value attribute
        cy.visit('https://webdriveruniversity.com/Actions/index.html');
        cy.get('[id="droppable"] p').invoke('attr','style','background-color: rgb(66, 250, 66)').trigger('change');
        cy.get('[id="droppable"] p').should('have.attr','style','background-color: rgb(66, 250, 66)');
    })

    it('test case 35', function () { 
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

   
})