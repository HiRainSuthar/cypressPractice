/// <reference types="cypress" />
class NavbarComponent{
    get loginOrRegisteLink(){
        return cy.get('#customer_menu_top li a ')
    }

    get specialsLink(){
        return cy.get('ul#main_menu_top li[data-id="menu_specials"] a')
    }

    get accountLink(){
        return cy.get('ul#main_menu_top li[data-id="menu_account"] a.menu_account')
    }

    get cartLink(){
        return cy.get('ul#main_menu_top li[data-id="menu_cart"] a')
    }

    get checkoutLink(){
        return cy.get('ul#main_menu_top li[data-id="menu_checkout"] a.menu_checkout')
    }
}

export default new NavbarComponent()