/// <reference types="cypress" />
import registerPage from '../../pageObjects/registerpageObjects'
import inboxPage from '../../pageObjects/inboxObjects'

describe('Tests for inbox tab',function(){
    before(function(){
        registerPage.goToDashboard()
    })
    after(function(){
        registerPage.logout()
    })
    it('Enter inbox', function(){
        cy.xpath(inboxPage.inboxLinkOnNavBar).click()
        cy.get(inboxPage.inboxBarInRightSide).should('be.visible')
        cy.xpath(inboxPage.inboxBarCloseBtn).click()
        //cy.wait(1000)
    })
    it('Send message for Conf chat', function(){
        cy.xpath(inboxPage.inboxLinkOnNavBar).click()
        cy.get(inboxPage.inboxBarInRightSide).should('be.visible')
        cy.xpath(inboxPage.firstChatRoomOnBar).click();
        //cy.wait(1000)
        cy.get(inboxPage.chatBox).should('be.visible')
        cy.get(inboxPage.typeMessageInputBox).type('automated hello')
        //cy.wait(1000)
        cy.get(inboxPage.chatMessage).last().should('have.text', 'automated hello')
        cy.xpath(inboxPage.closeChatBox).click()
    })
    it('Delete Chat', function(){
        cy.xpath(inboxPage.inboxLinkOnNavBar).click()
        cy.get(inboxPage.inboxBarInRightSide).should('be.visible')
        cy.xpath(inboxPage.firstChatRoomOnBar).click();
        //cy.wait(1000)
        cy.get(inboxPage.chatBox).should('be.visible')
        cy.xpath(inboxPage.closeChatBox).click();
        cy.get(inboxPage.chatBox).should('not.be.visible')
    })
})