import registerPage from '../../pages/register.page'
import schedulePage from '../../pages/schedule.page'
import homepage from '../../pages/home.page'

describe('Tests for schedule tab',function(){
    before(function(){
        cy.clearFirebaseAuth()
        registerPage.goToDashboard();
    })
    after(function(){
        registerPage.logout()
    })
    it('Add event to the calendar', function(){
        schedulePage.addNewEvent();
        cy.get(schedulePage.eventOnCalendar).should('be.visible')
    })
    it('Edit the event', function(){
        cy.get(schedulePage.eventOnCalendar).should('be.visible')
        schedulePage.editEvent();
        cy.wait(1000)
    })
    it('Delete event from the calendar', function(){
        cy.get(schedulePage.eventOnCalendar).should('be.visible')
        schedulePage.deleteEvent();
        cy.get(schedulePage.eventOnCalendar).should('not.be.visible')
        cy.wait(2000)
    })
    it.skip('Add session to schedule', function(){
        homepage.addSessionToSchedule();
        cy.wait(1000)
        cy.xpath(schedulePage.ScheduleLinkInNavBar).click()
        cy.wait(1000)
        cy.get(schedulePage.sessionOnCalendar).first().should('be.visible')
    })
})