describe('User Registration', () => {
    it('Register a new user successfully', () => {
      const uniqueEmail = `test${Date.now()}@example.com`;
  
      cy.visit('/signup');
      cy.get('#name').type('Test User');
      cy.get('#email').type(uniqueEmail);
      cy.get('#password').type('Test@123');
      cy.get('#signup-button').click();
  
      // Verify successful registration
      cy.url().should('include', '/dashboard');
      cy.contains('Welcome, Test User');
    });
  });