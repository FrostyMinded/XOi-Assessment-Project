describe('Login Tests', () => {
  beforeEach(function () {
      cy.fixture('userData').then((data) => {
          this.userData = data;
      });
  });

  it('Login with invalid credentials', function () {
      cy.login('wrongemail@email.com', 'wrongpassword');
      cy.contains('Your email or password is incorrect!');
  });
});