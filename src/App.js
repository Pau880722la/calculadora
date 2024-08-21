import Boton from './componentes/Boton.js';
import './App.css';
import Pantalla from './componentes/Pantalla.js';
import { useState } from 'react';

function App() {
  const numeros = [
    "7","8","9",
    "4","5","6",
    "1","2","3","0"];

  const contarNum  = () =>{
    return numeros.map((numero) => (
      <>
      <Boton value={numero} color="#8ab4f8" cls="num" manejarClick={mostrarNum}/>
      </>
    ));
  }

  const symbols = ["+","-","*","/","=","C", "sin", "cos", "tan", "log", "ln"];

  const contarSym  = () =>{
    return symbols.map((symbol) => (
      <>
      <Boton value={symbol} color="#4f65f1" cls="num" manejarClick = {manejarSymbol}/>
      </>
    ))
  }

  const [resultado, setResultado] = useState("0");
  const [operacion, setOperacion] = useState(null);
  const [valorPrevio, setValorPrevio] = useState(null);

  const manejarSymbol = (symbol) => {
    if (symbol === "C"){
      setResultado("");
      setOperacion(null);
      setValorPrevio(null);
    } else if (symbol === "="){
      if (operacion && valorPrevio !== null){
        const nuevoResultado = realizarOperacion(valorPrevio, resultado, operacion);
        setResultado(nuevoResultado);
        setOperacion(null);
        setValorPrevio(null);
      }
    }else if (["sin", "cos", "tan", "log", "ln"].includes(symbol)) {
      const nuevoResultado = realizarOperacionCientifica(resultado, symbol);
      setResultado(nuevoResultado); 
    } else {
      setOperacion(symbol);
      setValorPrevio(resultado);
      setResultado("");
    }
  }

  const realizarOperacion = (valor1, valor2, operacion) => {
    const numA = parseFloat(valor1);
    const numB = parseFloat(valor2);

    switch(operacion){
      case "+":
        return (numA + numB).toString();
      case "-":
        return (numA - numB).toString();
      case "*":
        return (numA * numB).toString();
      case "/":
        return numB !== 0 ? (numA / numB).toString() : "Error";
      case "^":
        return Math.pow(numA, numB).toString();
      default:
        return "";
    }
  }

  const realizarOperacionCientifica = (valor, operacion) => {
    const num = parseFloat(valor);

    switch(operacion){
      case "sin":
        return Math.sin(num).toString();
      case "cos":
        return Math.cos(num).toString();
      case "tan":
        return Math.tan(num).toString();
      case "log":
        return Math.log10(num).toString();
      case "ln":
        return Math.log(num).toString();
      default:
        return "";
    }
  }

  const mostrarNum = (numero) => {
    setResultado((value) => (value === "0" ? numero : value + numero));
  }
  
  return (
    <>
      <div className='calculadora'>
        <h1>La calculadora</h1> 
        <Pantalla numPantalla = {resultado} />
          <div className='botones'>
            {contarNum()}
            {contarSym()}
          </div>
      </div>
    </>
  );
}

export default App;
