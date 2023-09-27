import React, { useState } from 'react'

export default function TextForm(props) {
const handleUpClick =() => {
    // console.log("Uppercase Text Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success");
}
const handleLowClick =() => {
    // console.log("Lowercase Text Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!",'success');
}
const handleClearClick =() => {
    // console.log("Clear");
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
}

const handleOnChange =(event)=>{
    // console.log("On Change");
    setText(event.target.value);
}

const handleClearExtraSpace =() => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert("Extra Space Cleared!", "success");
}

const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
}

const [text,setText]= useState("Enter Your Text");
let newText = text.replaceAll(" ","");
let len = newText.length;
let string = text.trim();
let lengt=string.split(" ").length;
if (string.length===0) {
    lengt = "0";
 }
else{
    lengt= text.split(/[ ]+/).length;
}

  return (
    <>
    <div style={{backgroundColor: props.mode==='dark'?'#212529':'white'}}>  
    <div className=' container mb-3' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <h1  className="form-label">Text Box:</h1>
        <textarea className="exampletextarea" value={text} onChange={handleOnChange}   style={{backgroundColor:props.mode==='dark'?'#2b2e31': 'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" cols="100"></textarea>
        <div className='mt-4'>
        <button onClick={handleUpClick} className={`mx-2 btn btn-${props.mode==='dark'?'secondary':'primary'}`} >Convert to Uppercase</button>
        <button onClick={handleLowClick} className={`mx-2 btn btn-${props.mode==='dark'?'secondary':'primary'}`}>Convert to Lowercase</button>
        <button onClick={handleClearClick} className={`mx-2 btn btn-${props.mode==='dark'?'secondary':'primary'}`} >Clear Click</button>
        <button onClick={handleClearExtraSpace} className={`mx-2 btn btn-${props.mode==='dark'?'secondary':'primary'}`} >Clear Extra Space</button>
        <button className={`mx-2 btn btn-${props.mode==='dark'?'secondary':'primary'}`}  onClick={handleCopy} >Copy Text</button>
        </div>
    </div>
    <div className="container mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary:</h2>
        <p>{lengt} words , {len} characters (excluding the space) and {text.length} (including the space).</p>
        <p>{0.008* text.split(" ").length} Minutes read</p>
    </div>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
    </div>
    </div>
    </>
  )
}
