import React, { useState, useEffect } from 'react'
import questions from '../questions';
export default function QuestionBox() {

  // console.log(questions.id)
  const [points, incPoints] = useState(0)
  // var c = 0;
  const [currQues, next] = useState(questions[0].id)
  const increase = () => {
    next(currQues + 1)
  }
  const ans = (e) => {
    console.log(e.target.id, questions[currQues - 1].options[e.target.id].isCorrect)
    if (questions[currQues - 1].options[e.target.id].isCorrect === true) {
      incPoints(points => points + 1)
      //  console.log("1")
    }
    increase()
    // console.log(points)
    // console.log(c)
    // else if(questions[currQues-1].options[e.target.id].isCorrect===false){

    // }
    //  console.log(e.target.id)
  }
  //    useEffect(() => {
  //   window.addEventListener('click',ans)
  // },[currQues]);
  console.log("huhu", points)
  if (currQues <=5) {
    return (


      <div>

        <div id='no'>
          question no.{currQues} of 5
        </div>
        <div id='question'>{questions[currQues - 1].text}</div>
        <div id='options'>
          {questions[currQues - 1].options.map((opt) => {
            // console.log(opt)
            return (<button className='opt' id={opt.id} onClick={ans}>{opt.text}</button>)
          })}
        </div>


        {/* //   questions.map((text)=>{
      //     return(<div>{text.text}</div>)
      //   }) */}

      </div>
    );
  }
  else{
    return(<div id='scores'>score-{points}</div>)
    
  }
 
}
