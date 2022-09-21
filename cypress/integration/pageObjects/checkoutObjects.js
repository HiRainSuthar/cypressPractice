import CategoryMenuComponent  from "../Components/categorymenu.component"
import NavbarComponent from "../Components/navbar.component";

class CheckoutPage{

    get products() {return cy.get('.fixed .prdocutname')};
    get cartBtn() { return cy.get('.grid .pricetag .productcart')}
    get productTextInCart() {return  cy.get('.product-list .table tbody > tr:nth-child(2) > td:nth-child(2) > a')}

    checkout(category, productName){
    CategoryMenuComponent.categoryLink(category).click();
    // const products = cy.get('.fixed .prdocutname')
    const desiredProduct = this.products.filter(`:contains("${productName}")`)
    desiredProduct.get(this.cartBtn).eq(0).click();
    NavbarComponent.cartLink.click();
    cy.get(this.productTextInCart).should('have.text', `${productName}`)
    }
}

export default new CheckoutPage();