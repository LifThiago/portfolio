import React from 'react'
import './Home.css'
import satelite from '../../Assests/satelite.png'
import astronaut2 from '../../Assests/astronaut2.png'
import darkSpace from '../../Assests/darkSpace.jpg'
import { FaRocket } from 'react-icons/fa'

export default function Home() {
    React.useEffect(() => {
    let astro = document.getElementById('home_astronaut')
        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            astro.style.height = value*1.2 + 600 + 'px'
            astro.style.left = 55 + -value*0.2 + '%'
            // astro.style.height = value*1 + 600 + 'px'
            // astro.style.left = 55 + -value*0.1 + '%'
            astro.style.top = 15 - value*0.25 + '%'
            astro.style.rotate = -value*0.2 + 'deg'
    })}, [])
    

  return (
    <div className='home'>
        <img src={darkSpace} alt='bg' className='home_bg'/>
        {/* <h1 className="home_title">Hi! I'm Thiago,</h1>
        <h1 className="home_subtitle">Front-End Developer</h1> */}
        <h1 className="home_universe">A Universe</h1>
        <h1 className="home_subuniverse">Of Possibilites</h1>
        {/* <img src={astronaut} alt='home_astronaut' id='home_astronaut'/> */}
        <img src={astronaut2} alt='home_astronaut' id='home_astronaut'/>
        {/* <img src={satelite} className='home_satelite'/> */}
        <a href='#contact'><button className='home_button'>
          Let's Explore <FaRocket className='home_rocket'/>
        </button></a>
        {/* <button className='home_prueba'><FaRocket/></button> */}
    </div>
  )
}
