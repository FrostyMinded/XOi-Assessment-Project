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

// Creating a New Account

Cypress.Commands.add('registerNewUser', (userData) => {
  const emailFieldValue = `test${Date.now()}@mikestest.com`;
  const passwordNew = 'Test@pass';

  // Initial Signup Page
  cy.visit('/signup');
  cy.get('[data-qa="signup-name"]').type(userData.shippingDetails.firstname);
  cy.get('[data-qa="signup-email"]').type(emailFieldValue);
  cy.get('[data-qa="signup-button"]').click();

  // Registration Form
  cy.get('input[type="radio"][value="Mr"]').check();
  cy.get('[data-qa="password"]').type(passwordNew);
  cy.get('[data-qa="days"]').select('17'); 
  cy.get('[data-qa="months"]').select('1');      
  cy.get('[data-qa="years"]').select('1995');

  // Assertions for DOB selection
  cy.get('[data-qa="days"]').should('have.value', '17'); 
  cy.get('[data-qa="months"]').should('have.value', '1');      
  cy.get('[data-qa="years"]').should('have.value', '1995');

  // Additional Options
  cy.get('[name="newsletter"]').check();
  cy.get('[name="optin"]').check();

  // Shipping Details
  cy.get('[data-qa="first_name"]').type(userData.shippingDetails.firstname);
  cy.get('[data-qa="last_name"]').type(userData.shippingDetails.lastname);
  cy.get('[data-qa="address"]').type(userData.shippingDetails.address);
  cy.get('[data-qa="country"]').select(userData.shippingDetails.country);
  cy.get('[data-qa="country"]').should('have.value', userData.shippingDetails.country);
  cy.get('[data-qa="state"]').type(userData.shippingDetails.state);
  cy.get('[data-qa="zipcode"]').type(userData.shippingDetails.zip);
  cy.get('[data-qa="city"]').type(userData.shippingDetails.city);
  cy.get('[data-qa="mobile_number"]').type(userData.shippingDetails.mobile);

  // Submit registration
  cy.get('[data-qa="create-account"]').click();

  // Verify successful registration
  cy.url().should('include', '/account_created');
  cy.contains('Account Created!');
});