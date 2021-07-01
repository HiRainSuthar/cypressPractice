/// <reference types = "cypress"/>
import loginPage from "../pageObjects/loginpageObjects";

describe("login tests", function () {
    let logindata;
    beforeEach(function () {
        cy.visit("/");
        cy.get("#customer_menu_top > li > a").contains("Login").click();
        // one way to user fixture using aliases
        cy.fixture('logindetails').as('logindata');
        //another way to user fixture - while using below this context is not needed in it block
        // cy.fixture('logindetails').then(function(loginuserdata){
        //     logindata = loginuserdata;
        // })
    })
    it("user should get logged in : valid username and password", function () {
        loginPage.login(this.logindata.validUserName, this.logindata.validPassword);
        loginPage.validateUsername().should("have.text", this.logindata.welcomeMessage);
    })
    it("user should not get logged in : invalid username and password", function () {
        loginPage.login(this.logindata.invalidUserName, this.logindata.invalidPassword);
        loginPage.alertError().should("contain.text", this.logindata.loginFailedMessage);
    })
})