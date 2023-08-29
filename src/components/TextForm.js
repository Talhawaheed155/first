import React, {useState} from "react";


export default function TextForm(props) {
const handleUpClick = () => {
    // console.log('Uppercase was clicked' + text)
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Changed to upperCase", "success")
}
const handleLowClick = () => {
    // console.log('Uppercase was clicked' + text)
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Changed to lowerCase", "success")
}
const handleDelClick = () => {
    // console.log('Uppercase was clicked' + text)
    let newtext = "";
    setText(newtext)
    props.showAlert("Textbox Cleared", "success")
}
const handleOnChange = (event) => {
    // console.log('Onchange')
    setText(event.target.value)
}

    const [text, setText]= useState ('');

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
      <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8">
        </textarea>

      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>

      <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleDelClick} >Clear</button>
       

    </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} word {text.length} Character</p>
        <p>{0.008 * text.split(" ").length} Reading Time</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter Something in the Textbox to Preview"}</p>
      </div>

    </>
  );
}
