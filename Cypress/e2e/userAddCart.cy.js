describe('Login Tests', () => {
    beforeEach(function () {
      cy.fixture('userData').then((data) => {
        this.userData = data;
      });
    });
  
    it('Login with valid credentials', function () {
      cy.login(this.userData.user.email, this.userData.user.password);
    });

    it('Add a product to the cart', function () {
      cy.get('[data-product-id="2"]').click();
      cy.get('[data-dismiss="modal"]').click();
      cy.get('[class="fa fa-shopping-cart"]').click();
      cy.contains('Blue Top').should('be.visible');
    });
  });
  