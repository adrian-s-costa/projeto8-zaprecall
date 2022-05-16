import React from "react";
import "../styles/reset.css";
import "../styles/style.css";
import TelaInicial from "./TelaInicial";
import TelaPerguntas from "./TelaPerguntas"



export default function App(){

    const [tela, setTela] = React.useState('init')

    return(
        tela === 'init' ? <TelaInicial setTela={setTela}/>:<TelaPerguntas/>
    )
}