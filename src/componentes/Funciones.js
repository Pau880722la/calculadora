import React from "react";
import './Funciones.css';

export default function Funciones(props){
    return(
        <div className="funciones">
            <button>{props.funciones}</button>
        </div>
    );
}