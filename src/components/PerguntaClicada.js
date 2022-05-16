import React from "react";
import "../styles/reset.css";
import "../styles/style.css";
import PerguntaVirada from "./PerguntaVirada";

export default function PerguntaClicada(){

    const [clicado, setClick] = React.useState('naoClicado')
    
    return(
    <>
        {
            clicado === "naoClicado" ? 
            <div className="clickedQuestion">
                <h6>Pergunta 1</h6>
                <div className="icon">
                    <ion-icon name="refresh-outline" onClick={()=>setClick('clicado')}></ion-icon>
                </div>
            </div> : <PerguntaVirada/>
        }
    </>
        
    )
}