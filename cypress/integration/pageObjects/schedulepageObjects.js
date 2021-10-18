class schedulepage{

    ScheduleLinkInNavBar = "//div[@id='navbarCollapse']/links[1]//a[contains(text(),'Schedule')]"
    scheduleMeetingBtn = "#openScheduleMeetingModalBtn"
    addNewEventBtn = "#addNewEventBtn"
    eventNameInModal = "#newEventName"
    startDatePicker = "input#mdb-datepicker-0"
    endDatePicker = "input#mdb-datepicker-1"
}

export default new schedulepage()