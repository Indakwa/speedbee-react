import React from 'react'
//import { Link } from 'react-router-dom'
import angryBirds from './../assets/images/angry_birds.png';
import { HiVolumeOff } from 'react-icons/hi';
import { HiVolumeUp } from 'react-icons/hi';
import music from './../assets/music/absurd.mp3';

const Rank = () => {
  const [menuActive, setMenuActive] = React.useState(false)

  const [musicOn, setMusicOn] = React.useState(false)
  
  const audio = React.useMemo(() => new Audio(music), [])

  const playMusic = () => {
    setMusicOn(true)
  }

  const muteMusic = () => {
   setMusicOn(false)
  }

  React.useEffect(() => {
    if(musicOn){
      audio.play()
      audio.loop = true
    }else if(!musicOn){
      audio.pause()
    }
  })



  const openMenu = () => {
    setMenuActive(!menuActive)
  }
  

  const answ = localStorage.getItem('mySpeed')

  const rank = localStorage.getItem('rank')

  const toSpeedBee = () => {
    window.location.href = "./speedbee";
  }


  return (
    <section className='rankSection'>

    <div className={`board ${menuActive ? "dim" : ""}`}>
      {musicOn ? <HiVolumeUp className='mute' onClick={muteMusic}/> : <HiVolumeOff className='mute' onClick={playMusic}/>}

      <h3 className='speedText'>YOUR SPEED  &#62;&#62;&#62; <span id='speed'>{answ} Wpm</span></h3>
      <h3 className='rankText'>YOUR RANK  &#62;&#62;&#62; <span id='rank'>{rank}.</span></h3>
      {/* <Link to="/speedbee"><p id='toSpeedBee'>SPEEDBEE &#62;&#62;</p></Link> */}
      <p id='toSpeedBee' onClick={toSpeedBee}>SPEEDBEE &#62;&#62;</p>
      <p id='menu' onClick={openMenu}>INFO</p>
      <img id='angryBirds' src={angryBirds} alt="angry_birds" />
    </div>

    <div className={`menuBox ${menuActive ? "menuActive" : ""}`}>
          <p className='close' onClick={openMenu}>X</p>
          <p id='menuTxt'>
               SpeedBee is a web app made for you to test your typing speed. It is you against time to see how many words you can type and get ranked.
               <br /><br />
               Controls:
               <br />
               Press any key to start the Countdown. Keep in mind that a red background on text means you have a typo and you have to correct it in order to continue. Go ahead and have fun!
               <br />
               I got my fonts from www.dafont.com and the music from www.fesliyanstudios.com
               <br />
               Made with love by Bigfoot
            <br /><br />
            &copy; Copyright 2022
          </p>
    </div>
      
  </section>
  )
}

export default Rank