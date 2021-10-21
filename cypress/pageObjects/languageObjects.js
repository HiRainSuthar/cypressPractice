class language{
    //languageIcon= "(//div[@id='navbarCollapse']/links[2]//button[contains(text(),'Language')])[1]"
    languageIcon= "#navbarCollapse > links:nth-child(2) > ul > .d-md-block > button"
    languageDropdown = "div.small-dropdown"
    defaultSelectionOnDropdown = "(//a[@class='dropdown-item'])[1]" //.small-dropdown a.dropdown-item:nth-child(1)
    languageOption = ".small-dropdown a.dropdown-item:nth-child(8)"
}

export default new language()