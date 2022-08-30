import './App.css';
import { useState } from 'react';


function App() {
  const[result,updateresult]=useState(" ");

const calculator=(event)=>{
    updateresult(result.concat(event.target.name))
  }
const clear=()=>{
  updateresult("")
}
const backspace=()=>{
  updateresult(result.slice(0,-1))
}
const operation=()=>{
  updateresult(eval(result))
}

return (
    <div className="app">
    <div className="calculator">
      <div className="calculator_display">
      <input type="text" value={result}></input>
      </div>
      <div className="calculator_row_one">
        <button onClick={clear}>C</button>
        <button name="%" onClick={calculator}>%</button>
        <button onClick={backspace}>AC</button>
        <button name="/" onClick={calculator}>/</button>
        </div>
        <div className="calculator_row_two">
        <button name="7" onClick={calculator}>7</button>
        <button name="8" onClick={calculator}>8</button>
        <button name="9" onClick={calculator}>9</button>
        <button name="*" onClick={calculator}>*</button>
        </div>
        <div className="calculator_row_three">
        <button name="4" onClick={calculator}>4</button>
        <button name="5" onClick={calculator}>5</button>
        <button name="6" onClick={calculator}>6</button>
        <button name="-" onClick={calculator}>-</button>
        </div>
        <div className="calculator_row_four">
        <button name="1" onClick={calculator}>1</button>
        <button name="2" onClick={calculator}>2</button>
        <button name="3" onClick={calculator}>3</button>
        <button name="+" onClick={calculator}>+</button>
        </div>
        <div className="calculator_row_five">
        <button name="0" onClick={calculator}>0</button>
        <button name="." onClick={calculator}>.</button>
        <button name="=" onClick={operation}>=</button>
        <button onClick={clear}>C</button>
      </div>    
    </div>
    </div>
  );
}

export default App;
