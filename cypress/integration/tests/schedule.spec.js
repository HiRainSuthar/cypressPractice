/// <reference types="cypress" />
import registerPage from '../pageObjects/registerpageObjects'

describe.skip('Tests for schedule tab',function(){
    before(function(){
        registerPage.goToDashboard();
    })
    after(function(){
        registerPage.logout()
    })
    it('Schedule tests', function(){
        
    })
})