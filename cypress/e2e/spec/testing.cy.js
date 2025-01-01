
describe('suite name', function () {

    let testData;
    beforeEach(function () {
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
        cy.fixture('example').then((data) => {
            testData = data;
        })
    })

    it('test case 1', function () {
        // cy.visit('https://webdriveruniversity.com/Data-Table/index.html');
        // cy.get('.traversal-drinks-list li').each((element,index,list)=>{
        //     cy.log(`index${index}:${element.text()}`);
        // })

        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.fixture('example').then((data) => {
            cy.get('[name="username"]').type(data.username);
            cy.get('[name="password"]').type(data.password);
        })
        cy.get('[type="submit"]').click();
    })

    it('test case 2', function () {

        cy.get('[name="username"]').focus().wait(2000).type(testData.username).blur();
        cy.get('[name="password"]').type(testData.password);
        cy.get('[type="submit"]').click();
    })

    it('test case 3', function () {
        cy.fixture('logo 2.jpeg', null).then((logo) => {
            // logo will be read as a buffer
            // and should look something like this:
            // Buffer([0, 0, ...])
            expect(Cypress.Buffer.isBuffer(logo)).to.be.true
        })
    })

    it('test case 4', function () {
        cy.fixture('raghunandan ringtone.mp3', 'base64').then((mp3) => {
            const uri = 'data:mp3;base64,' + mp3
            const audio = new Audio(uri)
            audio.play();
        })
    })

    it('test case 5', function () {

        cy.get('[type="submit"]').focus();
        cy.focused().then((element) => {
            cy.log(element.text());
        })
    })

    it('test case 6', function () {
        cy.get('[name="username"]').type(testData.username);
        cy.get('[name="password"]').type(testData.password);
        cy.get('[type="submit"]').click();
        cy.pause();
        cy.getAllCookies()
            .should('have.length', 1)
            .then((cookies) => {
                console.log(cookies);
                const cookie = cookies[0]
                //expect(cookie.value).to.equal("qvnsgkii3t3gluoe2q2bkos8b9")
                expect(cookie).to.have.property('httpOnly', true)
            })
    })

    it('test case 7', function () {

        cy.get('[name="username"]').type(testData.username);
        cy.get('[name="password"]').type(testData.password);
        cy.get('[type="submit"]').click();
        cy.pause();
        cy.getAllLocalStorage().then((result) => {
            console.log(result);
            // expect(result).to.deep.equal({
            //   'https://opensource-demo.orangehrmlive.com': {
            //     key: '/core/i18n/messages'
            //   },
            // }) 
            expect(result).to.have.property('/core/i18n/messages', '"ZWs3TwZKMQ7IEEFBrjJOSwRM4nXcQgsOPZKkNJnMS5o="')
        })
    })

    it('test case 8', function () {
        cy.get('[name="username"]').type(testData.username);
        cy.get('[name="password"]').type(testData.password);
        cy.get('[type="submit"]').click();
        cy.pause();
        cy.getCookie('orangehrm').then((data) => {
            console.log(data);
        })
    })

    it('test case 9', function () {
        cy.get('[name="username"]').type(testData.username);
        cy.get('[name="password"]').type(testData.password);
        cy.get('[type="submit"]').click();
        cy.get('.oxd-main-menu li').eq(2).click();
        cy.pause();
        cy.get('.oxd-main-menu li').eq(3).click();
        cy.pause();
        cy.go(-2);
        cy.pause();
        cy.go(+2);
        cy.pause();
    })

    it('test case 10', function () {

        let message = 'hello'
        const english = {
            greeting() {
                return message
            },
        }
        setTimeout(() => {
            message = 'bye'
        }, 1000)
        cy.wrap(english).invoke('greeting').should('equal', 'bye')

    })

    it('test case 11', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list li').its('length').should('be.gt', 4);
        cy.wrap({ age: 52 }).its('age').should('eq', 52)
    })

    it('test case 12', function () {
        cy.log('another message', ['one', 'two', 'three']);
        console.log('another message', ['one', 'two', 'three']);
    })

    it('test case 13', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').next().should('have.attr', 'id', 'tea');
        cy.get('.traversal-drinks-list li').first().nextAll()
            .should('have.contain', 'Tea', 'Milk', 'Espresso', 'Sugar');
        cy.get('#fruits').nextUntil('#veggie')
            .should('have.contain', 'Apple', 'Banana', 'Blackberries', 'Cherries', 'Figs')
            .and('have.length', 5)
        cy.get('.traversal-drinks-list li').not('#coffee').should('have.length', 4)
    })

    it('test case 14', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').parent().should('have.class', 'traversal-drinks-list');
        cy.pause().get('#coffee').parentsUntil('.container').should('have.length', 3);

    })

    it('test case 15', function () {
        cy.readFile('cypress/fixtures/New Text Document.txt').should('eq', 'Cypress Automation Read File');
        cy.pause();
        cy.fixture('testData').then((data) => {
            cy.log(data.fname);
            let test = data.fname;
            expect(test).to.eq('John');
        })
        cy.readFile('cypress/fixtures/testData.json').its('lname').should('eq', 'Justin')
        cy.fixture('testData').its('age').should('eq', 40);
        cy.fixture('New Text Document.txt').should('eq', 'Cypress Automation Read File');
    })

    it('test case 16', function () {

        const data = {
            fname: "Pummy",
            lname: "Snow",
            age: 2
        }
        cy.writeFile('cypress/fixtures/qwerty.json', data)
        cy.readFile('cypress/fixtures/qwerty.json').its('lname').should('eq', 'Snow');
        cy.writeFile('cypress/fixtures/New Document.txt', "Hello world");
        cy.readFile('cypress/fixtures/New Document.txt').should('eq', 'Hello world');

        cy.writeFile('cypress/fixtures/testData.json', data)
        cy.readFile('cypress/fixtures/testData.json').its('lname').should('eq', 'Snow');
    })

    it.only('test case 17', function () {

        const filename = 'cypress/fixtures/testData.json'

        cy.readFile(filename).then((obj) => {
            obj.fullname = 'Pummy Snowky'
            // write the merged object
            cy.writeFile(filename, obj)
        })
    })

})