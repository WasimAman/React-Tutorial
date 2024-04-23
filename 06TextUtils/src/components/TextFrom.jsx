import React, { useState } from "react";

function TextFrom(props) {
  const [text, setText] = useState("");

  const changeToUpperCase = () => {
      
      setText(text.toUpperCase());
  };

  const changeToLowerCase = () => {
      setText(text.toLowerCase());
  };
  const handleOnChange = (event) => {
    
    setText(event.target.value);
    console.log(event.target.value);
    console.log(event.target);
  };

  const getNoOfWords = (word)=>{
    if(text===""){
        return 0;
    }
    return word.trim().split(" ").length;
  }

  const getNoOfCharacters = (characters)=>{
    return characters.length;
  }

  const getText = ()=>{
    document.querySelector("#your-text").innerHTML = text;
  }
  return (
    <>
      <div className="container">
        <div className="mb-3 my-3">
          <h4>{props.heading}</h4>
          <textarea
            className="form-control"
            id="text-form"
            rows="6"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter Here"
          ></textarea>
        </div>
        <button
          id="submit-btn"
          className="btn btn-primary mx-1"
          onClick={changeToUpperCase}
        >
          UpperCase
        </button>
        <button
          id="submit-btn"
          className="btn btn-primary mx-1"
          onClick={changeToLowerCase}
        >
          LowerCase
        </button>
        <button
          id="submit-btn"
          className="btn btn-primary mx-1"
          onClick={getText}
        >
          GetYourText
        </button>
      </div>
      <div className="container my-3">
        <h1>Summary</h1>
        <h4>No of words:- {getNoOfWords(text)} </h4>
        <h4>No of character :- {getNoOfCharacters(text)}</h4>
        <h4>Time to read:- {(getNoOfWords(text)/300).toFixed(2)} minutes (an Average person takes 1 minute to read 300 words)</h4>

        <h4 className="mt-5">Your Written Text :- </h4>
        <p id="your-text"></p>
      </div>
    </>
  );
}

export default TextFrom;
