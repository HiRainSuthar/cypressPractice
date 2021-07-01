
class loginPage {
    usernameTxtbox = "#loginFrm_loginname";
    passwordTxtbox = "#loginFrm_password";
    submitBtn = "button[title='Login']";
    login(username, password) {
        cy.get(this.usernameTxtbox).type(username);
        cy.get(this.passwordTxtbox).type(password)
        cy.get(this.submitBtn).click();
    }
    validateUsername(){
        return cy.get("#customer_menu_top > li > a > div.menu_text");
    }
    alertError(){
        return cy.get("div.alert-error");
    }
}
export default new loginPage();