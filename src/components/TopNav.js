import React from 'react'
//import { Link } from "react-router-dom"
import music from './../assets/music/absurd.mp3';
import { TiArrowBack } from 'react-icons/ti';
import { HiVolumeOff } from 'react-icons/hi';
import { HiVolumeUp } from 'react-icons/hi';


const TopNav = () => {
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

  const toHome = () => {
    window.location.href = "/";
  }




  return (
    <section className='topNav'>
      {/* <Link to="/" onClick={toHome}><TiArrowBack className='back-icon'/></Link> */}

      <TiArrowBack className='back-icon' onClick={toHome}/>

      
      <h2 className='title'>IT'S YOU VS TIME! TEST YOUR TYPING SPEED.</h2>
      {musicOn ? <HiVolumeUp className='mute' onClick={muteMusic}/> : <HiVolumeOff className='mute' onClick={playMusic}/>}
    </section>
  )
}


export default TopNav