describe('User Registration', () => {
  beforeEach(function () {  
    cy.fixture('userData').then((data) => {
      this.userData = data; 
    });
  });

  it('Register a new user successfully', function () {
    cy.registerNewUser(this.userData);
    cy.deleteTestAccount();
  });
});