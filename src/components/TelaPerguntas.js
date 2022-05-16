import React from "react";
import "../styles/reset.css";
import "../styles/style.css";
import logo from "../Images/logo.png";
import Pergunta from "./Pergunta";
import Footer from "./Footer";


export default function TelaPergunta(){
    return(
        <div className="pageIndex">
            <div className="textLogo">
                <img src={logo} className="logoQuestions" alt="logo"/>
                <h1 className="indexTittle">ZapRecall</h1>
            </div>
            <Pergunta/>
            <Footer/>
        </div>
)}
