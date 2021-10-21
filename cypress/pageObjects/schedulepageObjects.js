import { getFormattedDate } from '../support/utility'
class schedulePage {

    ScheduleLinkInNavBar = "//div[@id='navbarCollapse']/links[1]//a[contains(text(),'Schedule')]"
    scheduleMeetingBtn = "#openScheduleMeetingModalBtn"
    addNewEventBtn = "#addNewEventBtn"
    eventNameInModal = "#newEventName"
    startDatePicker = "input#mdb-datepicker-0"
    endDatePicker = "input#mdb-datepicker-1"
    closeBtnInDatePicker = "mdb-date-picker button.picker__button--close"
    eventStartTime = "#startTimeInput"
    eventEndTime = "#endTimeInput"
    eventOnCalendar = ".cal-events-container .cal-ends-within-day"
    deleteEventBtn = "//mwl-calendar-event-actions/span/a/i"
    confirmDeleteBtnOnModal = "#deleteEventBtn"
    evenToEdit = "//mwl-calendar-week-view-event/div"
    editEventBtnOnModal = "#manualEditEventBtn"
    sessionOnCalendar = "mwl-calendar-week-view-event div"

    addNewEvent() {
        cy.xpath(this.ScheduleLinkInNavBar).click()
        cy.get(this.scheduleMeetingBtn).click()
        cy.get(this.addNewEventBtn).should('be.visible')
        cy.get(this.eventNameInModal).type("testEvent")
        cy.get(this.startDatePicker).click().type(getFormattedDate())
        cy.get(this.closeBtnInDatePicker).click()
        cy.get(this.endDatePicker).click().type(getFormattedDate())
        cy.get(this.closeBtnInDatePicker).click()
        cy.get(this.eventStartTime).click().type("11:00")
        cy.get(this.eventEndTime).click().type("11:30")
        cy.get(this.addNewEventBtn).click()
        cy.wait(1000)
    }

    deleteEvent() {
        cy.xpath(this.deleteEventBtn).click()
        cy.wait(500)
        cy.get(this.confirmDeleteBtnOnModal).click()
    }

    editEvent() {
        cy.xpath(this.evenToEdit).click({ force: true })
        cy.get(this.eventStartTime).click().type("10:00")
        cy.get(this.eventEndTime).click().type("10:30")
        cy.get(this.editEventBtnOnModal).click()
    }
}

export default new schedulePage()