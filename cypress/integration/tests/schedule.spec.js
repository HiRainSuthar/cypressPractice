
describe('Tests for lounge tab',function(){
    before(function(){
        cy.visit('https://nowvue.live/vue-by-nowevents-demo-A000180/register')
        cy.wait(7000)
        cy.xpath("(//input[@placeholder='Enter your email'])[1]").type("test@test.com")
        cy.wait(500)
        cy.xpath("//span[contains(text(),'Access now')]").click()
        cy.wait(5000)
        cy.xpath("//div[@id='navbarCollapse']/links[1]//a[contains(text(),'Schedule')]").click()
        cy.wait(20000)
    })
    after(function(){
        cy.xpath("//div[@id='navbarCollapse']/links[2]/ul/li[1]/a/img").click()
        cy.xpath("//div[@id='navbarCollapse']//div//a[contains(text(),'Logout')]").click()
    })
    it('Edit personal Profile (Via Network)', function(){
        cy.log("on network tab")
        //cy.get("#createNewLoungeRoom").click()
    })
})