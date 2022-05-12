import "../styles/reset.css";
import "../styles/style.css";
import logo from "../Images/logo.png"

export default function TelaInicial(){
    return(
        <>
            <img src={logo} className="logo" alt="logo"/>
            <h1 className="indexTittle">ZapRecall</h1>
            <button className="indexButton">Iniciar Recall!!</button>
        </>
    )
}