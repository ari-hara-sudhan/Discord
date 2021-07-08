import React from 'react'
import "./Sidebar.css"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import CallIcon from "@material-ui/icons/Call"
import MicIcon from "@material-ui/icons/Mic"
import HeadsetIcon from "@material-ui/icons/Headset"
import SettingsIcon from "@material-ui/icons/Settings"
import SidebarChannel from './SidebarChannel'
import { Avatar } from '@material-ui/core'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>ahs programmingWorld</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="sidebar__channels"> 
            <div className="sidebar__channelsHeader">
                <div className="sidebar__header">
                <ExpandMoreIcon/>
                <h4>Text Channels</h4>
                </div>

              <AddIcon className="sidebar__addIcon"/>
            </div>
            <div className="sidebar__channelList">
                <SidebarChannel/>

            </div>
            </div>
       <div className="sidebar__voice">
           <SignalCellularAltIcon className="sidebar__voiceicon" fontSize="large"/>
           <div className="sidebar__voiceinfo">
               <h3>Voice Connected</h3>
               <p>Stream</p>

           </div>
           <div className="sidebar__voiceicon">
               <InfoOutlinedIcon/>
               <CallIcon/>

           </div>
     
       </div>
       <div className="sidebar__profile">
            <Avatar/>
            <div className="sidebar__profileInfo">
                <h3>ahsDev</h3>
                <p>#thisIsMyId</p>

            </div>
            <div className="sidebar__profileIcons">
                <MicIcon/>
                <HeadsetIcon/>
                <SettingsIcon/>

            </div>
        </div>
        </div>
    )
}

export default Sidebar
