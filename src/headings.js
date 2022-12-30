import React, { useState } from "react";
function Heads(){
    const[currMode,changeMode]=useState('light mode');
    const modeSetting=()=>{
      if(currMode==='light mode'){
        changeMode(currMode => 'dark mode')
        document.getElementById("main").style.backgroundColor="#0b1f18"
        document.getElementById("popup").style.backgroundColor="#3C6255"
        document.getElementById("main").style.color="#EAE7B1"
        document.getElementById("popup").style.color="#EAE7B1"
        document.getElementById("0").style.color="#EAE7B1"
        document.getElementById("1").style.color="#EAE7B1"
        document.getElementById("2").style.color="#EAE7B1"
        document.getElementById("3").style.color="#EAE7B1"
        document.getElementById("4").style.color="#EAE7B1"
       
      }
      else if(currMode==='dark mode'){
       changeMode(currMode =>'light mode') 
       document.getElementById("main").style.backgroundColor="#EAE7B1"
       document.getElementById("popup").style.backgroundColor="#A6BB8D"
       document.getElementById("main").style.color="#0b1f18"
       document.getElementById("popup").style.color="#0b1f18"
       document.getElementById("0").style.color="#0b1f18"
       document.getElementById("1").style.color="#0b1f18"
       document.getElementById("2").style.color="#0b1f18"
       document.getElementById("3").style.color="#0b1f18"
       document.getElementById("4").style.color="#0b1f18"

      }
    }
    // useEffect(() => {
      
    // });
    return( <div id="heading">
      <div className="title">Kalvium Quiz</div>
      <div id="modeButton"><button id="dd" onClick={modeSetting}>{currMode}</button></div>
    </div>)
}
export default Heads;