class inboxPage{
    inboxLinkOnNavBar = "//div[@id='navbarCollapse']/links[1]//a[contains(text(),'Inbox')]"
    inboxBarInRightSide = "#slide-out"
    inboxBarCloseBtn = "(//ul[@id='slide-out']/mdb-navbar-brand/mdb-icon/i)[1]"
    firstChatRoomOnBar = "//ul[@id='slide-out']/div/ul/li/div/a/div[2]"
    chatBox = "app-instance-chat-box #myForm"
    typeMessageInputBox = "app-instance-chat-box mdb-card-footer input"
    chatMessage = "mdb-card-body .chat-message mdb-card span.text-white" //multiple elements
    closeChatBox = "(//mdb-card-header//a[@id='closeButton']/mdb-icon/i)[3]"
}

export default new inboxPage()