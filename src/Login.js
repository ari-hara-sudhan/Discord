import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
function Login() {
    const signin=()=>{
      auth.signInWithPopup(provider)
      .catch((error)=>alert(error.message))
    }
    return (
        <div className="login">
           <div className="login__logo">
               <img src="https://th.bing.com/th/id/OIP.lfXzac2UyRVOSKUhuD5-ogHaCU?pid=ImgDet&rs=1" alt="imsg"/>
           </div>

           <Button onClick={signin}>Sign In</Button>
        </div>
    )
}

export default Login

