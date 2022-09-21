class CategoryMenuComponent{

    category_apparel = `Apparel & accessories`
    category_makeup = `Makeup`
    category_skincare = `Skincare`
    category_fragrance = `Fragrance`
    category_men = `Men`
    category_haircare = `Hair Care`
    category_books = `Books`

    categoryLink(category){
        return cy.xpath(`//ul[@class="nav-pills categorymenu"]//a[contains(text(),"${category}")]`)
    }

}

export default new CategoryMenuComponent();