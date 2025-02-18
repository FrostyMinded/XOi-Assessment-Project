describe('Add to Cart Tests', () => {
  beforeEach(function () {
    cy.fixture('userData').then((data) => {
      this.userData = data;
    });
  });

  it('Should log in and add a product to the cart', function () {
    cy.login(this.userData.user.email, this.userData.user.password);
    cy.addProductToCart('[href="/product_details/2"]', 'Men Tshirt');
    cy.deleteTestAccount();
  });
});
