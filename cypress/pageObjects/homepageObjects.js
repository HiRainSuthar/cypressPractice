class homepage{
    homeLinkOnNavBar = "//div[@id='navbarCollapse']/links[1]//a[contains(text(),'Home')]"
    sessionsOnHome = "//app-dashboard/div[3]/div[1]//mdb-icon[@icon='calendar-check']"
    addToScheduleBtn = "//app-dashboard//div[@class='modal-content']//button[contains(text(), 'Add to schedule')]"

    addSessionToSchedule(){
        cy.xpath(this.homeLinkOnNavBar).click()
        cy.xpath(this.sessionsOnHome).first().click()
        cy.xpath(this.addToScheduleBtn).click()
    }
}
export default new homepage()