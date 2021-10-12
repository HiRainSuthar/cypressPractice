
import { getFirstName, getLastName, emailGenerator } from '../../support/utility.js'

describe('Register a user', function () {
    before(function () {
        cy.writeFile('cypress/fixtures/vulogindetail.json', { email: emailGenerator() })
    })
    beforeEach(function() {
        // load example.json fixture file and store
        // in the test context object
        cy.fixture('vulogindetail').as('emaildata')
    })
    var firstName = getFirstName()
    var lastName = getLastName()
    var activationLink;
    it('Register a user', function () {
        cy.log('userEmail is ' + this.emaildata.email)
        cy.visit('https://nowvue.live/vue-by-nowevents-demo-A000180/register')
        cy.wait(10000)
        cy.xpath("//span[contains(text(),'Register now')]").type(this.emaildata.email)
        cy.wait(2000)
        cy.get('#emailInput').type(this.emaildata.email)
        cy.wait(2000)
        cy.get('#firstNameInputForLargeScreens').type(firstName)
        cy.get('#lastNameInputForLargeScreens').type(lastName)
        cy.get('#organizationInput').type('testorganization')
        cy.get('#jobTitleInput').type('testjobTitleInput')
        cy.xpath("//button[contains(text(),'SIGN UP')]").click()
        cy.wait(45000)
    })

    it('Get the magic link from email', function () {
        cy.log('useremail in another it block is ' + this.emaildata.email)
        cy.request({
            method: 'GET',
            url: 'https://mailsac.com/api/addresses/' + this.emaildata.email + '/messages',
            headers: {
                'Mailsac-Key': 'k_lNY97FJxKR8cTCI4E9lYjoHay92Ub3jQ0pZsrrIcR'
            },
        }).then(response => {
            let emailVerificationSubject = `Welcome to Vue by NowEvents Demo`
            // cy.get(response.body).should('not.be.empty')
            let filteredSubject = response.body.filter((message) => message.subject == emailVerificationSubject)
            // cy.log('Filtered subject ' + JSON.stringify(filteredSubject))
            cy.log('Filtered subject ' + JSON.stringify(filteredSubject[0].subject))
            activationLink = filteredSubject[0].links[0]
            //cy.log('response is ' + JSON.stringify(filteredSubject[0].links[0]))
            cy.log('link is ' + activationLink)
            cy.visit(activationLink);
            cy.wait(60000)
        })
    })
})
