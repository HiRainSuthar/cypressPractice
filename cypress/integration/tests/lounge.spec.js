/// <reference types="cypress" />
import registerPage from '../../pages/register.page'
import loungePage from '../../pages/lounge.page'

describe('Tests for lounge tab', function () {
    before(function () {
        registerPage.goToDashboard()
    })
    this.beforeEach(function(){
        cy.xpath(loungePage.loungeLinkOnNavBar).click();
    })
    after(function () {
        registerPage.logout()
    })
    it('Enter Lounge Page', function () {
        cy.wait(3000)
        cy.xpath(loungePage.createNewLoungeRoomBtn).should('be.visible')
    })
    it('Create a Lounge Page', function () {
        loungePage.createLoungeRoom('testLoungeRoom')
        cy.wait(5000)
        cy.get(loungePage.endMeetingBtn).click();
        cy.wait(3000)
        cy.xpath(loungePage.loungeRoomNames).contains('testLoungeRoom')
    })
    it('Create a Duplicate Lounge Page', function () {
        loungePage.createLoungeRoom('testLoungeRoom')
        cy.wait(5000)
        cy.get(loungePage.endMeetingBtn).click();
        cy.wait(3000)
        cy.xpath(loungePage.loungeRoomNames).contains('testLoungeRoom')
    })
    it('Create a very long Alpha Numeric Lounge Page (>20 Char)', function () {
        loungePage.createLoungeRoom('@12%-J0on12Hh#20%')
        cy.wait(5000)
        cy.get(loungePage.endMeetingBtn).click();
        cy.wait(3000)
        cy.xpath(loungePage.loungeRoomNames).should('not.contain', '@12%-J0on12Hh#20%')
    })
})