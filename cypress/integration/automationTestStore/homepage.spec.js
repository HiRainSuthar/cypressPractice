/// <reference types="cypress" />
import homepage from '../pageObjects/homepageObjects';

describe("automation test store home page tests", () => {
    beforeEach(() => {
        cy.visit("/");
    })

    it("user should be navigated to home page", () => {
        homepage.logo().should("be.visible");
    })

    it("social icons should be displayed", () => {
        homepage.socialIcons().should("be.visible");
    })
})