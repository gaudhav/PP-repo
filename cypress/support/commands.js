// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';  //plugin for file upload
require('@4tw/cypress-drag-drop') //plugin for drag and drop



Cypress.Commands.add('autoSuggesionDropdown',(text,value)=>{
    cy.get('[id="myInput"]').type(text);
    cy.get('#myInputautocomplete-list').contains(value).click();
});

Cypress.Commands.add('login',(username,password)=>{
    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type(password);
    cy.get('form').submit();
});

// Cypress.Commands.add(      //tab32 code
//     'verifyTableRow',
//     (tableSelector, tableIndex, tbodyIndex, rowIndex, columnIndex, rowData) => {
//       for (let i = 0; i < columnIndex.length; i++) {
//         cy.get(`${tableSelector}`)
//           .find('table')
//           .eq(tableIndex)
//           .find('tbody')
//           .eq(tbodyIndex)
//           .find('tr')
//           .eq(rowIndex)
//           .find('td')
//           .eq(columnIndex[i])
//           .should('have.contain', rowData[i]);
//       }
//     });
