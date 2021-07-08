import React from 'react'
import { useDispatch } from 'react-redux'
import "./SidebarChannel.css"
import { setChat } from './features/chatSlice'

function SidebarChannel({id,channel}) {

    const dispatch =useDispatch()
    return (
        <div     onClick={()=>{
            dispatch(
                setChat({
                    chatId:id,
                    chatName:channel
                })
            )
        }

        } className="sidebarchannel">
            <h4><span className="sidebarchannel__hash">#</span>{channel}</h4>
        </div>
    )
}

export default SidebarChannel
