
class searchPage {
    searchLinkInNavBar = "//div[@id='navbarCollapse']/links[1]//a[contains(text(),'Search')]";
    searchTxtbox = "#searchBar";
    searchResult = "//p[contains(text(),'Sessions')]";
    resetSearchField = "#resetSearchField"

}
export default new searchPage();