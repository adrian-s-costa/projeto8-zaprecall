import "../styles/reset.css";
import "../styles/style.css";
import logo from "../Images/logo.png"
import React from "react";




export default function TelaInicial({setTela}){


    return(
        <div className="pageIndex">
            <img src={logo} className="logo" alt="logo"/>
            <h1 className="indexTittle">ZapRecall</h1>
            <button className="indexButton" onClick={()=>setTela('next')}>Iniciar Recall!!</button>
        </div>
    )
}
