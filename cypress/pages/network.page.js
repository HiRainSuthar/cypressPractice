class networkPage {
    networkTabOnNavBar = "//div[@id='navbarCollapse']/links[1]//a[contains(text(),'Network')]"
    searchBar = "(//input[@id='organizationInput'])[1]"
    searchResult = "app-networking mdb-card"
    searchResultName = "//mdb-card/mdb-card-body/mdb-card-title/h4"
    clearSerchFieldBtn = "#clearSearchFieldBtn"
    searchResultOrganization = "//app-networking//mdb-card-text/p/div[2]"
    chatBtnOnProfile = "//app-networking//mdb-card/mdb-card-body/div/div[1]"
    profileEditBtn = "(//app-user-profile//mdb-card//button[contains(text(),'Edit')])[2]"
    emailInProfile = "(//app-user-profile//mdb-card//mdb-icon[@icon='envelope']/ancestor::p)[2]"
    saveInProfile = "(//app-edit-profile//mdb-card//button[contains(text(),'Save')])[1]"
    jobInProfile = "//input[@id='jobTitleInputForLargeScreen']"
    chatBtnInProfileInSearch= "//app-networking//mdb-card-body//div[contains(text(),'Chat')]"
    chatBox = "//mdb-card[@id='myForm']"
    profilesOnSearch = "//app-networking//mdb-card/mdb-card-body/div/div[2]/div"
    messageBtnOnProfile = "//app-user-profile//mdb-card//button[contains(text(),'Message')]"

    search(keywordToSearch) {
        cy.xpath(this.networkTabOnNavBar).click()
        cy.xpath(this.searchBar).clear().type(keywordToSearch)
    }
}
export default new networkPage()