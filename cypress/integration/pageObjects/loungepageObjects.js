class loungePage{
    loungeLinkOnNavBar = "//div[@id='navbarCollapse']/links[1]//a[contains(text(),'Lounge')]"
    createNewLoungeRoomBtn = "#createNewLoungeRoom"
    roomNameTxtboxOnModal = "#defaultForm-roomName"
    createRoomBtnOnModal = "#createLoungeRoomBtn"
    modalClostBtn = "#createLoungeRoomModalCloseBtn"
    loungeRoomNames = "//app-lounge/div[2]/div/div//mdb-card-body/div/div/div[1]"
    endMeetingBtn = "#disconnectBtn"

    createLoungeRoom(loungeRoomName){
        cy.xpath(this.createNewLoungeRoomBtn).click();
        cy.get(this.roomNameTxtboxOnModal).type(loungeRoomName)
        cy.get(this.createRoomBtnOnModal).click()
    }
}

export default new loungePage()