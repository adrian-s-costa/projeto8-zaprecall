import "../styles/reset.css";
import "../styles/style.css";
import PerguntaClicada from "./PerguntaClicada";
import React from "react";

const perguntas = [
    {
      texto: "ta calmo?",
      clicado:false
    },
    {
      texto: "ta calvo?",
      clicado:false
    }
]


function Pergunta(props) {

  const [click, setClick] = React.useState(props.clicado)

  return (
  <>
    {click===false ?
    <div className="question">
      <h6>{props.texto}</h6>
      <ion-icon name="play-outline" onClick={()=>(setClick('a'))}></ion-icon>
    </div> : <PerguntaClicada />}
  </>
  );
}

export default function Perguntas(){
    return(
    <div className="questionsGroups">
      {perguntas.map((item)=>(
        <>
        <Pergunta texto={item.texto} clicado={item.clicado} />
        </>
      ))} 
    </div>
  )
}