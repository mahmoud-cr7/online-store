import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { ReactDOM } from "react";


import "./login.css"
export default function Login(){
return(
    <div className="parent">
        <div className = "register">
<form>
   
<input id ="name" type ="text" placeholder="Username....."/>


<input id ="password" type ="password" placeholder="password....."/>



 <a href="#">forget password !!</a>

<div style={{textAlign:"center"}}>

    <button type="submit">Login</button>
</div>
</form>
</div>

    </div>
   
)


}