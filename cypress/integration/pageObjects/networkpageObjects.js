class networkPage {
    networkTabOnNavBar = "//div[@id='navbarCollapse']/links[1]//a[contains(text(),'Network')]"
    searchBar = "(//input[@id='organizationInput'])[1]"
    searchResult = "app-networking mdb-card"
    searchResultName = "//mdb-card/mdb-card-body/mdb-card-title/h4"
    clearSerchFieldBtn = "#clearSearchFieldBtn"
    searchResultOrganization = "//app-networking//mdb-card-text/p/div[2]"
    chatBtnOnProfile = "//app-networking//mdb-card/mdb-card-body/div/div[1]"

    search(keywordToSearch) {
        cy.xpath(this.networkTabOnNavBar).click()
        cy.xpath(this.searchBar).type(keywordToSearch)
    }
}
export default new networkPage()