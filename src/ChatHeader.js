import React from 'react'
import "./ChatHeader.css"
import NotificationIcon from "@material-ui/icons/Notifications"
import EditLocationRoundedIcon from "@material-ui/icons/EditLocation"
import PeopleAltRoundedIcon from "@material-ui/icons/People"
import SearchRoundedIcon from "@material-ui/icons/Search"
import SendRoundedIcon from "@material-ui/icons/Send"
import HelpRoundedIcon from "@material-ui/icons/Help"
function ChatHeader() {
    return (
        <div className="chatheader">
            <div className="chatheader__left">
            <h3><span className="chatheader__hash">#</span>channel name</h3>
            </div>
            
            <div className="chatheader__right">
                <NotificationIcon/>
                <EditLocationRoundedIcon/>
                <PeopleAltRoundedIcon/>
            </div>
            <div className="chatheader__search">
                <input placeholder="search"/>
                <SearchRoundedIcon/>

            </div>
            <SendRoundedIcon/>
            <HelpRoundedIcon/>
        </div>
    )
}

export default ChatHeader
