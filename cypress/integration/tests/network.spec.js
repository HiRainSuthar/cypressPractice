/// <reference types="cypress" />
import registerPage from '../pageObjects/registerpageObjects'
import networkPage from '../pageObjects/networkpageObjects'

describe('Tests for network tab',function(){
    before(function(){
        registerPage.goToDashboard()
    })
    beforeEach(function(){
        cy.fixture('logindata').as('logindata');
    })
    after(function(){
        registerPage.logout()
    })
    it('Search person within network', function(){
        networkPage.search(this.logindata.personToSearch)
        cy.get(networkPage.searchResult).should('be.visible')
        cy.xpath(networkPage.searchResultName).should('contain.text',this.logindata.personToSearch)
        cy.get(networkPage.clearSerchFieldBtn).click()
    })
    it('Search organization within network', function(){
        networkPage.search(this.logindata.organizationToSearch)
        cy.get(networkPage.searchResult).should('be.visible')
        cy.xpath(networkPage.searchResultOrganization).should('contain.text',this.logindata.organizationToSearch)
        cy.get(networkPage.clearSerchFieldBtn).click()
    })
})