import React, { useState } from 'react';
import "../TextForm.css";

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleOnChange = (event) => {
        const newText = event.target.value;
        setText(newText);
    }
    const handleUppercase = () => {
        setText(text.toUpperCase());
        props.alert("Converted to upperCase!", "success");
    }
    const handleLowercase = () => {
        setText(text.toLowerCase());
        props.alert("Converted to lowerCase!", "success");
    }
    const handleClear = () => {
        const newText = "";
        setText(newText);
        props.alert("all text are cleared!", "success");
    }
    const handleBold = () => {
        const newText = document.querySelector("#myText");
        newText.style.fontWeight = 'bold';
        props.alert("Converted to bold text!", "success");
    }
    const handleItalic = () => {
        const newText = document.querySelector("#myText");
        newText.style.fontStyle = 'italic';
        props.alert("Converted to italic text!", "success");
    }
    const handleRemoveExtraSpace = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.alert("Removed all extra spaces!", "success");
    }
    const handleCopy = () => {
        const newText = document.querySelector("#myText");
        newText.select();
        navigator.clipboard.writeText(newText.value);   
        document.getSelection().removeAllRanges();
        props.alert("Text copied!", "success");
    }
    return (
        <>
            <div className='container mb-3' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}} id="myText" rows="10" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-secondary m-1" onClick={handleUppercase}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-secondary m-1" onClick={handleLowercase}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-secondary m-1" onClick={handleBold}>Convert to Bold</button>
                <button disabled={text.length===0} className="btn btn-secondary m-1" onClick={handleItalic}>Convert to Italic</button>
                <button disabled={text.length===0} className="btn btn-secondary m-1" onClick={handleRemoveExtraSpace}>Remove extra space</button>
                <button disabled={text.length===0} className="btn btn-secondary m-1" onClick={handleCopy}>Copy all the text</button>
                <button disabled={text.length===0} className="btn btn-secondary m-1" onClick={handleClear}>Clear Text</button>
            </div>
            <div className="container mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((ele) => {return ele.length !== 0}).length} words and {text.length} characters.</p>
                <p>{text.length>0?0.008 * text.split(" ").length:0} minutes to read it.</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something in textbox to preview here.'}</p>
            </div>
        </>
    )
}
