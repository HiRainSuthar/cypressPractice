
describe('Tests for network tab',function(){
    before(function(){
        cy.visit('https://nowvue.live/vue-by-nowevents-demo-A000180/register')
        cy.wait(5000)
        cy.xpath("(//input[@placeholder='Enter your email'])[1]").type("test@test.com")
        cy.wait(500)
        cy.xpath("//span[contains(text(),'Access now')]").click()
        cy.wait(5000)
        cy.xpath("//div[@id='navbarCollapse']/links[1]//a[contains(text(),'Network')]").click()
    })
    after(function(){
        cy.xpath("//div[@id='navbarCollapse']/links[2]/ul/li[1]/a/img").click()
        cy.xpath("//div[@id='navbarCollapse']//div//a[contains(text(),'Logout')]").click()
    })
    it('Edit personal Profile (Via Network)', function(){
        cy.xpath("(((//mdb-card)[1])//mdb-icon)[2]").click()
    })
})



//div[@id="navbarCollapse"]/links[1]//a[contains(text(),'Network')]