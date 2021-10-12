import registerPage from '../pageObjects/registerpageObjects'
import loungePage from '../pageObjects/loungepageObjects'

describe('Tests for lounge tab', function () {
    before(function () {
        registerPage.goToDashboard()
    })
    after(function () {
        registerPage.logout()
    })
    it('Enter Lounge Page', function () {
        cy.xpath(loungePage.loungeLinkOnNavBar).click();
        cy.wait(3000)
        cy.xpath(loungePage.createNewLoungeRoomBtn).should('be.visible')
    })
    it('Create a Lounge Page', function () {
        loungePage.createLoungeRoom('testLoungeRoom')
        cy.xpath(loungePage.loungeRoomNames).contains('testLoungeRoom')
    })
    it('Create a Duplicate Lounge Page', function () {
        loungePage.createLoungeRoom('testLoungeRoom')
        cy.xpath(loungePage.loungeRoomNames).not.contains('testLoungeRoom')
    })
    it('Create a very long Alpha Numeric Lounge Page (>20 Char)', function () {
        loungePage.createLoungeRoom('@12%-J0on12Hh#20%')
        cy.xpath(loungePage.loungeRoomNames).contains('@12%-J0on12Hh#20%')
    })
})