/// <reference types="cypress" />
import registerPage from '../pageObjects/registerpageObjects'
import schedulePage from '../pageObjects/schedulepageObjects'

describe('Tests for schedule tab',function(){
    before(function(){
        registerPage.goToDashboard();
    })
    // after(function(){
    //     registerPage.logout()
    // })
    it('Schedule tests', function(){
        cy.xpath(schedulePage.ScheduleLinkInNavBar).click()
        cy.get(schedulePage.scheduleMeetingBtn).click()
        cy.get(schedulePage.addNewEventBtn).should('be.visible')
        cy.get(schedulePage.eventNameInModal).type("testEvent")
        cy.get(1000)
        cy.get(schedulePage.startDatePicker).click().type("2021-10-19")
        cy.get(500)
        cy.get("mdb-date-picker button.picker__button--close").click()
        cy.get(500)
        cy.get(schedulePage.endDatePicker).click().type("2021-10-19")
        cy.get(500)
        cy.get("mdb-date-picker button.picker__button--close").click()
        cy.get(1000)
        cy.get("#startTimeInput").click().type("11:00")
        cy.get("#endTimeInput").click().type("11:30")
        cy.wait(1000)
        cy.get(schedulePage.addNewEventBtn).click()
    })
})