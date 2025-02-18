describe('Add to Cart Tests', () => {
  beforeEach(function () {
    cy.fixture('userData').then((data) => {
      this.userData = data;
    });
  });

  it('Should log in, add a product to the cart, checkout', function () {
    cy.login(this.userData.user.email, this.userData.user.password);
    cy.addProductToCart('[href="/product_details/2"]', 'Men Tshirt');
    cy.get('[class="btn btn-default check_out"]').click();
    cy.verifyUserDetails(this.userData);
    cy.proceedToCheckout();
    cy.addPaymentDetails();
    cy.deleteTestAccount();
  });
});
