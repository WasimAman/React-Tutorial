import React, {useState} from 'react';

function TextFrom(props) {
    const [text,setText] = useState()
    
    const changeToUpperCase = ()=>{
        setText(text.toUpperCase())
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    return (
        <div className="container">
            <div className="mb-3 my-3">
                <h4>{props.heading}</h4>
                <textarea className="form-control" id="text-form" rows="6" value={text} onChange={handleOnChange} placeholder="Enter Here"></textarea>
            </div>
            <button id="submit-btn" className="btn btn-primary" onClick={changeToUpperCase}>UpperCase</button>
        </div>
    );
}

export default TextFrom;
