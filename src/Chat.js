import React from 'react'
import "./Chat.css"
import ChatHeader from './ChatHeader'
import AddCircleIcon from "@material-ui/icons/Add"
import CardGiftCardIcon from "@material-ui/icons/CardGiftcard"
import GifIcon from "@material-ui/icons/Gif"
import EmojiEmotionIcon from "@material-ui/icons/EmojiEmotions"
import Message from './Message'
function Chat() {
    return (
        <div className="chat">
            <ChatHeader/>
            <div className='chat__message'>
                <Message/>
            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input placeholder={`Message tee`}/>
                    <button  className="chat__inputButon" type="submit">Send</button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftCardIcon fontSize="large"/>
                    <GifIcon fontSize="large"/>
                    <EmojiEmotionIcon fontSize="large"/>


                </div>
            </div>
        </div>
    )
}

export default Chat
