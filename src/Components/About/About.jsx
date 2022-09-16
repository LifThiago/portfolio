import React from 'react'
import './About.css'
import planetaAzul from '../../Assests/planetaAzul.png'
import planeaNaranja from '../../Assests/planeaNaranja.png'
import rocket from '../../Assests/rocket.png'
import theOffice from '../../Assests/theOffice.jpg'
import cuadra from '../../Assests/cuadra.png'
import darkSpace from '../../Assests/darkSpace.jpg'

export default function About() {
    // React.useEffect( () => {
    //     let image = document.getElementById('me')
    //     function isTouchDevice(){
    //         try{
    //             document.createEvent('TouchEvent');
    //             return true;
    //         }
    //         catch(e){
    //             return false;
    //         }
    //     }
    //     const move = (e) => {
    //         try{
    //             var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    //             var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY
    //         }
    //         catch(e){}
    //         image.style.left = 8 + x +'px'
    //         image.style.top = -1330 + y +'px'
    //     }
    
    //     document.addEventListener("mousemove", (e) => {
    //         move(e)
    //     }) })

    React.useEffect(() => {
        let planet = document.getElementById('planet')
            window.addEventListener('scroll', function(){
                let value = window.scrollY;
                    planet.style.rotate = -value*0.1 + 'deg'
        })}, [])

    // React.useEffect(() => {
    //     let rocket = document.getElementById('rocket')
    //     window.addEventListener('scroll', function(){
    //         if (this.window.scrollY > 663) {
    //         let value = window.scrollY;
    //         console.log(this.window.scroll)
    //         console.log(this.window.scrollY)
    //         // rocket.style.top = value -300+ 'px'
    //         rocket.style.rotate = '90deg'} else {
    //             rocket.style.rotate = '0deg'
    //         }
    //     })

    // }, [] )

    React.useEffect(() => {
        let rocket = document.getElementById('rocket')
        console.log(window.scrollY)
        window.addEventListener('scroll', () => {
            let value = window.scrollY;
            if(window.scrollY >= 700 && window.scrollY < 987) {
                // Cuando llego esta asi
                // rocket.style.rotate = '90deg'
                // rocket.style.top = 295 -value/3 + 120+'px'
                rocket.style.top = 295 - value/2 + 250 +'px'
                // +grande == +abajo 
                // rocket.style.top = 295 -value/2.5 + 168+'px'
            } 
            else if(window.scrollY >= 987) {
                rocket.style.top = 0+'px'
                // rocket.style.rotate = '90deg'
            }
            else {
                rocket.style.top = 195+'px' 
                // rocket.style.rotate = '90deg'
            }
        })
    })


    // const scrollY = window.scrollY 
 
  return (
    <div className='about'>
        <img src={darkSpace} alt='bg' className='about_bg' id='about_bg'/>
        <img src={planetaAzul} id='planet' className='about_planet'/>
        <img src={planeaNaranja} id='planet2' className='about_planetNar'/>
        <img src={rocket} id='rocket' className='about_rocket'/>
        <h2 className="about_title">Get To Know Me</h2>
        <p className="about_p">
        {window.scrollY}I am a FrontEnd Developer, soon to be FullStack, passionate about creating my own projects and learning new technologies.
            <br/>
            <br/>
            I started learning Web Development by myself for a few months, until I decided to join HENRY's bootcamp, where I expanded my knowledge and my love for coding.
            <br/>
            <br/>
            I look forward to a job where I can learn and improve my skills, while achieving company goals.
            </p>
        <img src={theOffice} className='about_image' id='me'/>
        <img src={cuadra} className='about_imagebg'/>
    </div>
  )
}
