import { text } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import React, { useState } from "react";
import { ReactDOM } from "react";
import Header from "../header/header";
// import Header from "../header/header";

import "./login.css"
export default function Login(){

    const[userName,setUserName]=useState();
    const [password, setpassword] = useState();
    return(
    <div>
        <Header/>
    <div className="parent">
        <div className = "register">
<form>
   
<input id ="name" type ="text" value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder="Username....."/>


<input id ="password" type ="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="password....."/>



 <a href="#">forget password !!</a>

<div style={{textAlign:"center"}}>

    <button type="button" onClick={(e)=>{

        axios.post("http://localhost:8000/api/auth/login",{
                email:userName,
                password
        }).then(res=>{
            let data=res.data;

        })
    }}>Login</button>
</div>
</form>
</div>

    </div>
    </div>
)


}