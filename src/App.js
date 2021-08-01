import React, { useState } from "react";

const App = () => {

    const [oText, nText] = useState("");
    const [head, setHead] = useState([]);

    function Addd(event){
        const a = event.target.value;
nText(a);
    };

function Add(event){
    setHead((prevValue) => {return [...prevValue, oText]});
    nText(" ");
}

return(
    <div>
        <h1>TO-DO LIST</h1>
        <input type = "text" placeholder = "Enter text here " onChange = {Addd} value = {oText} />
        <button type = "button" onClick = {Add} ><span>Add</span></button>
     <ul> {head.map((a) => {return <><li>{a}</li>
     {/* <button type = "button" >Delete</button> */}
     {/* <button type = "button" onClick = {delete((a) => setHead((prevValue, a) => {return prevValue.filter((b, a) => {return b!==a}) }))} >Delete</button> */}
    </>})} </ul> 
     </div>
);
}

export default App;