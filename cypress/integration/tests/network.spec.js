/// <reference types="cypress" />
import registerPage from '../../pages/register.page'
import networkPage from '../../pages/network.page'

describe('Tests for network tab',function(){
    before(function(){
        cy.clearFirebaseAuth()
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
    //Assumption is - there would only be one profile with same name
    it.skip('Edit personal Profile (Via Network)', function(){
        networkPage.search('tommy')
        cy.xpath(networkPage.profilesOnSearch).first().click()
        cy.xpath(networkPage.profileEditBtn).should('be.visible').click()
        cy.xpath(networkPage.jobInProfile).clear().type('developerInTestOne')
        cy.xpath(networkPage.saveInProfile).click()
        cy.xpath(networkPage.profileEditBtn).should('be.visible')
    })
    it('Edit personal Profile (Via Profile Icon)', function(){
        cy.xpath(registerPage.userProfileBtn).click();
        cy.xpath(registerPage.myAccountBtn).click()
        cy.xpath(networkPage.profileEditBtn).should('be.visible').click()
        cy.xpath(networkPage.jobInProfile).clear().type('developerInTestTwo')
        cy.xpath(networkPage.saveInProfile).click()
        cy.xpath(networkPage.profileEditBtn).should('be.visible')
    })
    it('Chat with another user (DM, type 1)', function(){
        networkPage.search(this.logindata.personToSearch)
        cy.xpath(networkPage.chatBtnInProfileInSearch).first().click()
        cy.xpath(networkPage.chatBox).first().should('be.visible')
    })
    it('Chat with another user (DM, type 2)', function(){
        networkPage.search(this.logindata.personToSearch)
        cy.xpath(networkPage.profilesOnSearch).first().click()
        cy.wait(1000)
        cy.xpath(networkPage.messageBtnOnProfile).last().click()
        cy.xpath(networkPage.chatBox).first().should('be.visible')
    })
    it('Search Unknown user/company', function(){
        networkPage.search('unknown')
        cy.get(networkPage.searchResult).should('not.be.visible')
        cy.get(networkPage.clearSerchFieldBtn).click()
    })
})

////app-networking//mdb-card/mdb-card-body/div/div[2]
//