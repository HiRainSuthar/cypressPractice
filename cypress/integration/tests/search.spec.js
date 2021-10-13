import searchPage from '../pageObjects/searchpageObjects'
import registerPage from '../pageObjects/registerpageObjects'

describe('Tests for Search tab', function () {
    before(function () {
        registerPage.goToDashboard()
    })
    after(function () {
        registerPage.logout()
    })
    it('Enter Search Page', function () {
        cy.xpath(searchPage.searchLinkInNavBar).click()
        cy.wait(5000)
        cy.get(searchPage.searchTxtbox).should('be.visible')
    })
    it('Perfrom Search Funciton', function () {
        cy.get(searchPage.searchTxtbox).type("going")
        cy.wait(1000)
        cy.xpath(searchPage.searchResult).should('be.visible')
    })
    it('Clear search field', function () {
        cy.get(searchPage.resetSearchField).click()
        cy.wait(200)
        cy.get(searchPage.searchTxtbox).should('be.empty')
    })
})