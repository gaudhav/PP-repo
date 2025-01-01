
describe('uploading files',()=>{

    it('uploading file scenarioes', function () {
         
        // for selectFile() input tag is necessary

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

})