import React from "react";
import '../Sylessheets/Pantalla.css';

export default function Pantalla({numPantalla}){
    return(<>
        <div className="disp">
            {numPantalla}
        </div>
    </>);
}