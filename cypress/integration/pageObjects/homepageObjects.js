class homePage{
    logo(){
        return cy.get("a.logo > img");
    }
    socialIcons(){
        return cy.get(".social_icons").eq(0);
    }
}
export default new homePage();