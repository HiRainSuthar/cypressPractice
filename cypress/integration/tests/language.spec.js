/// <reference types="cypress" />
import registerPage from '../pageObjects/registerpageObjects'
import language from '../pageObjects/languageObjects'


describe('Tests for language', function () {
    before(function () {
        registerPage.goToDashboard()
    })
    after(function () {
        registerPage.logout()
    })
    it('Select Language', function () {
        cy.get(language.languageIcon).click()
        cy.wait(2000)
        cy.get(language.languageDropdown).should('be.visible')
        cy.xpath(language.defaultSelectionOnDropdown).should('have.text', 'English')
        cy.get(language.languageOption).click()
        cy.wait(15000)
        cy.get(language.languageIcon).click()
        cy.xpath(language.defaultSelectionOnDropdown).should('have.text', 'bahasa Inggris')
        cy.wait(1000)
        cy.get('body').click(0,0);
        cy.wait(1000)
        cy.get(language.languageIcon).click()
        cy.xpath(language.defaultSelectionOnDropdown).click()
    })
    it('Refresh page', function () {
        cy.get(language.languageIcon).click()
        cy.wait(2000)
        cy.get(language.languageDropdown).should('be.visible')
        cy.xpath(language.defaultSelectionOnDropdown).should('have.text', 'English')
        cy.get(language.languageOption).click()
        cy.wait(15000)
        cy.get(language.languageIcon).click()
        cy.xpath(language.defaultSelectionOnDropdown).should('have.text', 'bahasa Inggris')
        cy.reload();
        cy.wait(15000)
        cy.get(language.languageIcon).click()
        cy.xpath(language.defaultSelectionOnDropdown).should('have.text', 'bahasa Inggris')
        cy.wait(2000)
        cy.get('body').click(0,0);
        cy.wait(2000)
        cy.get(language.languageIcon).click()
        cy.get('body').click(0,0);
        cy.wait(2000)
        cy.get(language.languageIcon).click()
        cy.xpath(language.defaultSelectionOnDropdown).click()
        cy.wait(15000)
    })
    it('Refresh page', function () {
        cy.get(language.languageIcon).click()
        cy.wait(2000)
        cy.get(language.languageDropdown).should('be.visible')
        cy.xpath(language.defaultSelectionOnDropdown).should('have.text', 'English')
        cy.get(language.languageOption).click()
        cy.wait(15000)
        cy.get(language.languageIcon).click()
        cy.xpath(language.defaultSelectionOnDropdown).should('have.text', 'bahasa Inggris')
        cy.reload();
        cy.wait(15000)
        cy.get(language.languageIcon).click()
        cy.xpath(language.defaultSelectionOnDropdown).should('have.text', 'bahasa Inggris')
        cy.wait(2000)
        cy.get('body').click(0,0);
        cy.wait(2000)
        cy.get(language.languageIcon).click()
        cy.get('body').click(0,0);
        cy.wait(2000)
        cy.get(language.languageIcon).click()
        cy.xpath(language.defaultSelectionOnDropdown).click()
        cy.wait(15000)
    })
    it('Sign out and sign back in', function () {
        cy.get(language.languageIcon).click()
        cy.wait(2000)
        cy.get(language.languageDropdown).should('be.visible')
        cy.xpath(language.defaultSelectionOnDropdown).should('have.text', 'English')
        cy.get(language.languageOption).click()
        cy.wait(15000)
        cy.get(language.languageIcon).click()
        cy.xpath(language.defaultSelectionOnDropdown).should('have.text', 'bahasa Inggris')
        registerPage.logout()
        cy.wait(1000)
        registerPage.goToDashboard()
        cy.wait(10000)
        cy.get(language.languageIcon).click()
        cy.xpath(language.defaultSelectionOnDropdown).should('have.text', 'bahasa Inggris')
        cy.get(language.languageIcon).click()
        cy.get('body').click(0,0);
        cy.wait(2000)
        cy.get(language.languageIcon).click()
        cy.xpath(language.defaultSelectionOnDropdown).click()
        cy.wait(15000)
    })
})

