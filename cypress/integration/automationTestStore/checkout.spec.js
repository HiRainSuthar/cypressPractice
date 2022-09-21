/// <reference types="cypress" />
import loginPage from "../pageObjects/loginpageObjects";
import CategoryMenuComponent from "../Components/categorymenu.component";
import NavbarComponent from "../Components/navbar.component";
import CheckoutPage from "../pageObjects/checkoutObjects";

describe("Checkout tests", function () {
  before(function () {
    cy.visit("/");
    cy.get("#customer_menu_top > li > a").contains("Login").click();
    cy.fixture("logindetails").as("logindata");
  });
  xit("checkout test with fragrance prodcuts", function () {
    loginPage.login(this.logindata.validUserName, this.logindata.validPassword);
    CategoryMenuComponent.categoryLink(CategoryMenuComponent.category_fragrance)
      .eq(0)
      .click();
    cy.get(".grid .col-md-3").each(function($element){
      if($element.find('.prdocutname').text() === 'Gucci Guilty'){
        cy.wrap($element).click();
      }
    })
    cy.get('.productpagecart .cart').click();
    cy.get(
      ".product-list .table tbody > tr:nth-child(2) > td:nth-child(2) > a"
    ).should("have.text", "Gucci Guilty");
  });
  it("checkout test with haircare products", function(){
    loginPage.login(this.logindata.validUserName, this.logindata.validPassword);
    CheckoutPage.checkout(CategoryMenuComponent.category_haircare, "Seaweed Conditioner")
  });
});
