import React, { useEffect, useState } from 'react'
import "./Chat.css"
import ChatHeader from './ChatHeader'
import AddCircleIcon from "@material-ui/icons/Add"
import CardGiftCardIcon from "@material-ui/icons/CardGiftcard"
import GifIcon from "@material-ui/icons/Gif"
import EmojiEmotionIcon from "@material-ui/icons/EmojiEmotions"
import Message from './Message'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { selectChatId, selectChatName } from './features/chatSlice'
import firebase from 'firebase'
import db from './firebase'
function Chat() {
    const[input,setInput]=useState();
    const[messages,setMessages]=useState([]);
    const chatName=useSelector(selectChatName)
    const chatId=useSelector(selectChatId)
    const user =useSelector(selectUser)


    useEffect(()=>{
        if(chatId){
            db.collection("channels").doc(chatId)
            .collection("messages").orderBy("timestamp","desc")
            .onSnapshot(snapshot=>{
                setMessages(snapshot.docs.map(doc=>({
                    id:doc.id,
                    data:doc.data()
                })))
            })
    
        }
      
    },[chatId])
  
    const sendMessage=(e)=>{
        e.preventDefault();
        db.collection("channels").doc(chatId).collection("messages").add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            photo:user.photo,
            displayName:user.displayName,
            

        })
        setInput("");
    }

    return (
        <div className="chat">
            <ChatHeader channelName={chatName}/>
            <div className='chat__message'>

                {
                    messages.map(({id,data})=>(
                        <Message timestamp={data.timestamp} name={data.displayName} photo={data.photo} message={data.message} id={id}/>
                    ))
                }
                
            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input disabled={!chatId} value={input} onChange={e=>setInput(e.target.value)} placeholder={`Message tee`}/>
                    <button onClick={sendMessage}  disabled={!input} className="chat__inputButon" type="submit">Send</button>
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
