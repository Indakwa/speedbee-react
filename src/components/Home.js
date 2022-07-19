import React from 'react'
//import { Link } from 'react-router-dom'
import angryBirds from './../assets/images/angry_birds.png';
import music from './../assets/music/absurd.mp3';
import { HiVolumeOff } from 'react-icons/hi';
import { HiVolumeUp } from 'react-icons/hi';





const Home = () => {
  const [menuActive, setMenuActive] = React.useState(false)
  const [musicOn, setMusicOn] = React.useState(false)
  
  const audio = React.useMemo(() => new Audio(music), [])


  const openMenu = () => {
    setMenuActive(!menuActive)
  }

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




  //---------TYPING CAROUSEL START-----------
  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 200 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  const typingCarousel = () => {
    var elements = document.getElementsByClassName('txtRotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  window.onload = typingCarousel
//--------TYPING CAROUSEL END-----------


  const toSpeedBee = () => {
    window.location.href = "./speedbee";
  }



  return (
    <section className="home">

      <div className={`board ${menuActive ? "dim" : ""}`}>
      {musicOn ? <HiVolumeUp className='mute' onClick={muteMusic}/> : <HiVolumeOff className='mute' onClick={playMusic}/>}

        <h3 className='helloText'>Hi there you awesome Bigfootizen!</h3>
        <h3 className='welcomeText'>
          
            <span
              className='txtRotate'
              style={{ borderRight: "0.08em solid #666" }}
              data-period="1000"
              data-rotate='[ "Welcome to Bigfoot Sanctum",
               "Tap on SpeedBee to test your typing speed",
                "A red background on text means you have a typo",
                "Have fun!"
               ]'
              >
            </span>
        </h3>
        {/* <Link to="/speedbee"><p id='toSpeedBee'>SPEEDBEE &#62;&#62;</p></Link> */}
        <p id='toSpeedBee' onClick={toSpeedBee}>SPEEDBEE &#62;&#62;</p>
        <p id='menu' onClick={openMenu}>INFO</p>
        <img id='angryBirds' src={angryBirds} alt="angry_birds"/>
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

export default Home