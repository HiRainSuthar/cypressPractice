/// <reference types="cypress" />
class registerPage {

    // baseUrl = 'https://nowvue.live/vue-by-nowevents-demo-A000180/register'
    emailTxtbox = "(//input[@placeholder='Enter your email'])[1]"
    accessNowBtn = "//span[contains(text(),'Access now')]"

    userProfileBtn = "//div[@id='navbarCollapse']/links[2]/ul/li[1]/a/img"
    logoutBtn = "//div[@role='menu']//a" //div[@id='navbarCollapse']//div//a[contains(text(),'Logout')]
    myAccountBtn = "//div[@role='menu']//span"

    goToDashboard() {
        cy.visit('/')
        cy.wait(7000)
        cy.title().should('eq', 'NowEvents')
        cy.xpath(this.emailTxtbox).type("test@test.com")
        cy.wait(500)
        cy.xpath(this.accessNowBtn).click()
        cy.wait(5000)
    }

    logout() {
        cy.xpath(this.userProfileBtn).click()
        cy.xpath(this.logoutBtn).click()
    }

    //To clear the indexed db on condition
    clearSession() {
        cy.xpath(this.emailTxtbox).then($txtbox => {
            if (!$txtbox.is(':visible')) {
                cy.log('Into if block')
                //you get here only if button is not visible
                cy.clearIndexedDB()
                cy.reload()
            }
        })
    }
}

export default new registerPage();