import React from "react";
import '../Sylessheets/Boton.css';

export default function Boton({value, color, cls, manejarClick}){
    return(
        <>
            <button className={cls} style={{backgroundColor:color}} onClick={()=>manejarClick(value)}>{value}</button>
        </>
    );
}