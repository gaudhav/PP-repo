
describe('handling Cookies',()=>{
  
    it('handling Cookie using spread method', function () {
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

    it('Set and Get the cookies', function () {

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

    it('Get all cookies', function () {
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
    
    it('get cookie', function () {
        cy.get('[name="username"]').type(testData.username);
        cy.get('[name="password"]').type(testData.password);
        cy.get('[type="submit"]').click();
        cy.pause();
        cy.getCookie('orangehrm').then((data) => {
            console.log(data);
        })
    })

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
})