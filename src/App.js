import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./App.css"
import { login, logout, selectUser } from './features/userSlice'
import { auth } from './firebase'
import Sidebar from './Sidebar'
import Chat from "./Chat"
import Login from './Login'
function App() {
  const user =useSelector(selectUser)
  const dispatch=useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
        if(authUser){
          dispatch(login({
            uid:authUser.uid,
            photo:authUser.photoURL,
            email:authUser.email,
            displayName:authUser.displayName,
          }))

        }else{
          dispatch(logout())
        }
    })
  },[])
  return (
    <div className="app">

      {
        user?(
          <>
          <Sidebar/>
          <Chat/>
          </>
        ):(
          <Login/>
        )
      }
  
      
    </div>
  )
}

export default App