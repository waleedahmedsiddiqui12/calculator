import "../assests/calculator.css";
import React, { useState, memo  } from "react";

function Buttons() {

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];


  const handleButtonClick = (value) => {
    console.log(value.label);
    let val=value.label;

    if (val === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (val === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + val);
    }

  };


  return (

    <div className="calculator">
      <div className="display">   
      <input type="text" className="input" value={input} readOnly />
      <div className="result">{result}</div>

      </div>
  
      <div className="buttons">
        {buttons.map((label) => (
          <button
            key={label}
            label={label}
            onClick={() => handleButtonClick({label})}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );




}

export default memo(Buttons);
