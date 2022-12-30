import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import Heads from "./headings";



function App() {
 return(
  <div id="main">
    <Heads/>
    <div id="popup">
      <QuestionBox/>
    </div>
  </div>
  
 )
}

export default App;