import "../styles/reset.css";
import "../styles/style.css";
import logo from "../Images/logo.png"

let classNameIndex = "pageIndex"

export default function TelaInicial(){
    
    return(
        <div className={classNameIndex}>
            <img src={logo} className="logo" alt="logo"/>
            <h1 className="indexTittle">ZapRecall</h1>
            <button className="indexButton" onClick={questionScreen}>Iniciar Recall!!</button>
        </div>
    )
}

function questionScreen(){
    return(
        <div className={classNameIndex}></div>
    )
}