
class vuloginPage {
    usernameTxtbox = "#emailInput";
    passwordTxtbox = "#passwordInput";
    loginBtn = "form > button[type='submit']";
    profileBtn = "nav > ul > li > a"
    logoutBtn = "//*[contains(text(),'Logout')]"

    login(username, password) {
        cy.get(this.usernameTxtbox).type(username);
        cy.get(this.passwordTxtbox).type(password)
        cy.get(this.loginBtn).click();
    }
    validateUsername(){
        //return to validate element on screen
    }
    logut(){
        cy.get(this.profileBtn).click()
        cy.wait(1000)
        cy.xpath(this.logoutBtn).click()
    }
}
export default new vuloginPage();