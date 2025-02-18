describe('Login Tests', () => {
    beforeEach(function () {
      cy.fixture('userData').then((data) => {
        this.userData = data;
      });
    });
  
    it('Login with valid credentials', function () {
      cy.login('wrong username', 'wrong password');
      cy.get('[data-qa="error"]').should('be.visible');
    });
  });
  