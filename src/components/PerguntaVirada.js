import React from "react";
import "../styles/reset.css";
import "../styles/style.css";



function renderSwitch(clicado) {
    switch(clicado) {
      case 'errado':
        return <div className="question answeredr">
            <h6>Pergunta 1</h6>
            <ion-icon name="close-circle"></ion-icon>
        </div>;
      case 'certo':
        return <div className="question answeredg">
            <h6>Pergunta 1</h6>
            <ion-icon name="checkmark-circle"></ion-icon>
        </div>;
      case 'meio':
        return <div className="question answeredy">
            <h6>Pergunta 1</h6>
            <ion-icon name="help-circle"></ion-icon>
        </div>;
        default: return <h1>Nada</h1>
        
    }
}


export default function PerguntaVirada(){

    const [clicado, setResult] = React.useState('naoClicado')
    

    return(
        <> 
            {clicado === 'naoClicado'? 
            <div className="clickedQuestion twice">
            <h6>Pergunta 1</h6>
            <div className="btns">
                <button className="btn r" onClick={()=>setResult('errado')}>Nao Lembrei</button>
                <button className="btn y" onClick={()=>setResult('meio')}>Quase nao lembrei</button>
                <button className="btn" onClick={()=>setResult('certo')}>Zap</button>
            </div>
        </div>:renderSwitch(clicado)}
    </>

    )
}
