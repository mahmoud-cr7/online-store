import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import "./register.css"
export default function Register(){
return(
    <div className="parent">
        <div className = "register">
<form>
    <label htmlfor= "name">name</label>
<input id ="name" type ="text" placeholder="Name....."/>
<label htmlfor= "email">Email</label>
<input id ="email" type ="email" placeholder="email....."/>
<label htmlfor= "password">password</label>
<input id ="password" type ="password" placeholder="password....."/>
<label htmlfor= "repeat">repeat</label>
<input id ="repeat" type ="password" placeholder="repeat password....."/>
<label htmlfor= "repeat">Phone number</label>
<input id ="phone" type ="number" placeholder="01#########"/>
<div style={{textAlign:"center"}}>

    <button type="submit">Register</button>
</div>
</form>
</div>

    </div>
)


}