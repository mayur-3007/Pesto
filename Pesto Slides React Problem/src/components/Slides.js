import React, { useState , useEffect } from 'react';
import slides from '../data/slides';
import "./Slides.css"

const Slides = () => {

  const [data,setData] = useState(slides)
  const [title,setTitle] = useState("")
  const [text,setText] = useState("")
  let [counter,setCounter] = useState(0)
  
  useEffect(() => {
    console.log(data)
  }, [])

  const handleRestart = () => {
    setTitle(data[0].title)
    setText(data[0].text)
    setCounter(0)
  }

  const handleSlide = (e) => {
    console.log(e.target.value)
    if(e.target.value === "prev"){
      counter = counter - 1
      if(counter < 0){
        // alert("cannot be less than 1")
        counter = 0
        setCounter(counter)
        console.log(counter)
      }
      else{
        setCounter(counter)
        setTitle(data[counter].title)
        setText(data[counter].text)
      }
    }
    if(e.target.value === "next"){
      counter = counter + 1
      if(counter > 4){
        // alert("cannot be more than 5")
        counter = 4
        setCounter(counter)
        console.log(counter)
      }
      else{
        setCounter(counter)
        setTitle(data[counter].title)
        setText(data[counter].text)
      }
    }
  }

  return(
    <div >
      <div className="center">
        <button data-testid="button-restart" onClick={handleRestart}>Restart</button>
        <button data-testid="button-prev" value="prev" onClick={handleSlide}>Prev</button>
        <button data-testid="button-next" value="next" onClick={handleSlide}>Next</button>
      </div>
      <div className="title">
        <h1 data-testid="title">{title}</h1>
        <p data-testid="text">{text}</p>
      </div>
    </div>
  )
}

export default Slides