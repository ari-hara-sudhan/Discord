import React from 'react'
import "./Message.css"
import { Avatar } from '@material-ui/core'
function Message({message,timestamp,name,photo}) {
    console.log(message,timestamp,name,photo)
    return (
        <div className="message">
            <Avatar src={photo}/>
            <div className="message__info">
                <h4>{name}<span className="message__timestamp">{new Date(timestamp?.toDate()).toLocaleTimeString()}</span></h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
