describe('Login Tests', () => {
    beforeEach(function () {
      cy.fixture('userData').then((data) => {
        this.userData = data;
      });
    });
  
    it('Login with valid credentials', function () {
      cy.login(this.userData.user.email, this.userData.user.password);
      cy.logout();
    });
  });
  