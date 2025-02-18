describe('Login Tests', () => {
  beforeEach(function () {
      cy.fixture('userData').then((data) => {
          this.userData = data;
      });
  });

  it('Login with valid credentials', function () {
      cy.login('wrongemail@email.com', 'wrongpassword');
      cy.contains('Your email or password is incorrect!');
  });
});