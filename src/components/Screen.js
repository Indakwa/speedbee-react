import React, { useRef } from "react";


const Screen = ({text}) => {

  const [text2, setText] = React.useState("")
  const [typedText, settypedText] = React.useState("")
  const [remainingText, setRemainingText] = React.useState("")
  const screenRef = useRef()
  const remainingTextRef = useRef()
  const typedTextRef = useRef()
  const inputRef = useRef()

  localStorage.setItem('txtLength', text.length)

  function handleChange(event){
    const name = event.target
    setText(
      name.value
    )
  }

  React.useEffect(() => {
    let text2Length = text2.length
    settypedText(text.substring(0, text2Length))
    setRemainingText(text.substring(text2Length, text.length))
    //console.log(`${typedText} - ${remainingText}`) for testing  ---HAHAHA! U probably know that---

    if(typedText === text2){
      typedTextRef.current.style.background = "none"
      
    }else if(typedText !== text2){
      
      const timer = setTimeout(() => typedTextRef.current.style.background = "#E25C4F");
      return () => clearTimeout(timer);
    }
  },[text2, remainingText, text, typedText])

  const onBlur = () => inputRef.current.focus()

 //COMPUTATIONS
 let rank
 const speed = Math.ceil((typedText.length / 5) / 1.5)
 localStorage.setItem('mySpeed', speed)

 if(speed >= 40){
  rank = "Owner of Krusty Krab, Mr.Krabs"
 }else if(speed >= 35 && speed <= 39){
  rank = "Owner of Chum Bucket, Plankton"
 }else if(speed >= 30 && speed <= 34){
  rank = "Spongebob's enemy, Bubble Bass"
 }else if(speed >= 25 && speed <= 29){ 
  rank = "The Cashier, Squidward Tentacles"
 }else if(speed >= 20 && speed <= 24){
  rank = "The Fry Cook, Spongebob Squarepants"
 }else if(speed >= 15 && speed <= 19){
  rank = "Employee at Krusty Krab, Patrick"
 }else if(speed >= 10 && speed <= 14){
  rank = "Helper at Krusty Krab, Sandy Cheeks"
 }else if(speed < 10){
  rank = "Waiter, Gary the Snail"
 }else{
  rank = "No Rank. Try again"
 }



 if(typedText !== text2){
  localStorage.setItem('rank', "Oops! You had a typo!")
 }else{
  localStorage.setItem('rank', rank)
 }



  return (
    <>
      <div className='screenDiv'>
        <div className="screen">
          <p className='text' ref={screenRef}>
            <span id='typedText' ref={typedTextRef}>{typedText}</span>
            <span id='cursor'></span>
            <span id='remainingText'  ref={remainingTextRef}>{remainingText}</span>
            </p>
        </div>
        <input type="text" name='text' ref={inputRef} className='input' onChange={handleChange} autoFocus autoComplete='off' onBlur={onBlur}/>
      </div>
    </>
  )
}

export default Screen 