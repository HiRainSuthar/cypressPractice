/// <reference types="cypress" />

import vuloginpage from '../pageObjects/vuloginpageObjects'

describe('Login tests', function(){
    this.beforeAll(function () {
        cy.fixture('vulogindetail').as('logindata');
    })
    after(function(){
        vuloginpage.logut();
    })
    it('valid user should be able to login', function(){
        cy.visit('https://creator.nowvue.live/login')
        vuloginpage.login(
            this.logindata.validUserName,
            this.logindata.validPassword)
        cy.wait(1000)
    })
})