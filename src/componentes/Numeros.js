import React from "react";
import './Numeros.css';


export default function Numeros(props){

    return(
        
        <div className="numeros">
            <button>{props.valor}</button>
        </div>
            
    );
}

