import React, { useState, useEffect } from "react";

const Timer = () => {
  
  const initialMinute = 1
  const initialSeconds = 30
  const [ active, setActive ] = useState(false);
  const [ minutes, setMinutes ] = useState(initialMinute);
  const [seconds, setSeconds ] =  useState(initialSeconds);

  useEffect(()=>{
    let myInterval
    document.addEventListener('keydown', handleKeyDown)
    
    if(active){
      myInterval = setInterval(() => {
        if (seconds > 0) {
            setSeconds(seconds - 1);
        }
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(myInterval)
                window.location.href = "./rank";
            } else {
                setMinutes(minutes - 1);
                setSeconds(59);
            }
        } 
    }, 1000)
    }

    function handleKeyDown(e) {
      setActive(true)
    }

    return ()=> {
        clearInterval(myInterval);
        document.removeEventListener('keydown', handleKeyDown);
      };
  });


  return (
    <div className='timerDiv'>

   { minutes === 0 && seconds === 0
            ?  <p id="time"> Time is up!</p> 
            : <p id="time"> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</p> 
        }
      <p id='timeBtn'>{active ? "TICK TOCK!" : "PRESS ANY KEY TO START"}</p> 
      
    </div>
  )
}

export default Timer