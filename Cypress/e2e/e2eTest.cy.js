describe('E-Commerce Flow', () => {
    beforeEach(function () {
      cy.fixture('userData').then((data) => {
        this.userData = data;
      });
  
    cy.session('userSession',() => {
      cy.login(this.userData.user.email, this.userData.user.password);
      });
    });
  
    it('Completes E-Commerce Flow', function () {
      cy.visit('/'); 
      cy.addProductToCart('[href="/product_details/2"]', 'Men Tshirt')
        .then(() => cy.proceedToCheckout()) 
        .then(() => cy.verifyUserDetails(this.userData))
        .then(() => cy.placeOrder())
        .then(() => cy.addPaymentDetails());
    });
  });