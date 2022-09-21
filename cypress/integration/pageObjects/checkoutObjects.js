import CategoryMenuComponent from "../Components/categorymenu.component";

class CheckoutPage {
  get products() {
    return cy.get(".grid .col-md-3");
  }
  get addToCartBtn() {
    return cy.get(".productpagecart .cart");
  }
  get productTextInCart() {
    return cy.get(
      ".product-list .table tbody > tr:nth-child(2) > td:nth-child(2) > a"
    );
  }

  checkout(category, productName) {
    CategoryMenuComponent.categoryLink(category)
      .eq(0)
      .click();
    this.products.each(function($element){
      if($element.find('.prdocutname').text() === productName){
        cy.wrap($element).click();
      }
    })
    this.addToCartBtn.click();  
    this.productTextInCart.should("have.text", productName);
  }
}

export default new CheckoutPage();
