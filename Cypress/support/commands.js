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
  cy.visit('/signup');
  cy.get('[data-qa="signup-name"]').type(userData.shippingDetails.firstname);
  cy.get('[data-qa="signup-email"]').type(userData.user.email);
  cy.get('[data-qa="signup-button"]').click();
  cy.get('input[type="radio"][value="Mr"]').check();
  cy.get('[data-qa="password"]').type(userData.user.password);
  cy.get('[data-qa="days"]').select('17'); 
  cy.get('[data-qa="months"]').select('1');      
  cy.get('[data-qa="years"]').select('1995');
  cy.get('[data-qa="days"]').should('have.value', '17'); 
  cy.get('[data-qa="months"]').should('have.value', '1');      
  cy.get('[data-qa="years"]').should('have.value', '1995');
  cy.get('[name="newsletter"]').check();
  cy.get('[name="optin"]').check();
  cy.get('[data-qa="first_name"]').type(userData.shippingDetails.firstname);
  cy.get('[data-qa="last_name"]').type(userData.shippingDetails.lastname);
  cy.get('[data-qa="address"]').type(userData.shippingDetails.address);
  cy.get('[data-qa="country"]').select(userData.shippingDetails.country);
  cy.get('[data-qa="country"]').should('have.value', userData.shippingDetails.country);
  cy.get('[data-qa="state"]').type(userData.shippingDetails.state);
  cy.get('[data-qa="zipcode"]').type(userData.shippingDetails.zip);
  cy.get('[data-qa="city"]').type(userData.shippingDetails.city);
  cy.get('[data-qa="mobile_number"]').type(userData.shippingDetails.mobile);
  cy.get('[data-qa="create-account"]').click();
  cy.url().should('include', '/account_created');
  cy.contains('Account Created!');
});

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
  cy.get('[data-qa="login-button"]').click();
  cy.get('[class="fa fa-lock"]').should('be.visible');
  cy.get('[class="fa fa-trash-o"]').should('be.visible');
});

Cypress.Commands.add('logout', () => {
  cy.get('[class="fa fa-lock"]').click();
  cy.url().should('include', '/login');
});

Cypress.Commands.add('addProductToCart', (productSelector, productName) => {
  cy.get(productSelector).click(); 
  cy.get('[class="btn btn-default cart"]').click(); 
  cy.get('[data-dismiss="modal"]').click(); 
  cy.contains('a', 'Cart').click();
  cy.contains(productName).should('be.visible');
});

Cypress.Commands.add('verifyUserDetails', (userData) => {
  cy.contains(userData.shippingDetails.firstname).should('be.visible');
  cy.contains(userData.shippingDetails.lastname).should('be.visible');
  cy.contains(userData.shippingDetails.address).should('be.visible');
  cy.contains(userData.shippingDetails.city).should('be.visible');
  cy.contains(userData.shippingDetails.state).should('be.visible');
  cy.contains(userData.shippingDetails.zip).should('be.visible');
  cy.contains(userData.shippingDetails.country).should('be.visible');
  cy.contains(userData.shippingDetails.mobile).should('be.visible');
});

Cypress.Commands.add('proceedToCheckout', () => {
  cy.contains('a','Place Order').click();
});

Cypress.Commands.add('addPaymentDetails', (userData) => {
  cy.fixture('userData').then((userData) => {
    cy.get('[data-qa="name-on-card"]').type(userData.shippingDetails.firstname);
    cy.get('[data-qa="card-number"]').type('4242424242424242');
    cy.get('[data-qa="cvc"]').type('123');
    cy.get('[data-qa="expiry-month"]').type('12');
    cy.get('[data-qa="expiry-year"]').type('2030');
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="order-placed"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').should ('be.visible');
  });
});

Cypress.Commands.add('deleteTestAccount', () => {
  cy.contains('a', 'Delete Account').click();
  cy.contains('Account Deleted').should('be.visible');
});
