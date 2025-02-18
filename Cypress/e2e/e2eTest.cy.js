describe('E-Commerce Flow', () => {
    beforeEach(function () {
      cy.fixture('userData').then((data) => {
        this.userData = data;
      });
    });
  
    it('Login successfully', function () {
      cy.login(this.userData.user.email, this.userData.user.password);
    });
  
    it('Add a product to cart', function () {
      cy.addProductToCart('[href="/product_details/2"]', 'Men Tshirt');
    });
  
    it('Proceed to checkout', function () {
      cy.get('[data-qa="checkout"]').click();
    });
  
    it('Enter payment details and complete order', function () {
      cy.addPaymentDetails();
    });
  });