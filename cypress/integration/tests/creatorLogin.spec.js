/// <reference types="cypress" />

import creatorloginPage from '../pageObjects/creatorloginpageObjects'

describe('Login tests', function(){
    this.beforeAll(function () {
        cy.fixture('vulogindetail').as('logindata');
    })
    after(function(){
        creatorloginPage.logut();
    })
    it('valid user should be able to login', function(){
        cy.visit('https://creator.nowvue.live/login')
        creatorloginPage.login(
            this.logindata.validUserName,
            this.logindata.validPassword)
        cy.wait(1000)
    })
})