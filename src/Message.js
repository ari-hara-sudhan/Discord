import React from 'react'
import "./Message.css"
import { Avatar } from '@material-ui/core'
function Message() {
    return (
        <div className="message">
            <Avatar/>
            <div className="message__info">
                <h4>ahs dev<span className="message__timestamp">timestamamp</span></h4>
                <p>message</p>
            </div>
        </div>
    )
}

export default Message
