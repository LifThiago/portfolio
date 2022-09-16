import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Skills.css'
import htmlLogoOK from '../../Assests/htmlLogoOK.png'
import cssLogo from '../../Assests/cssLogo.png'
import reactLogo from '../../Assests/reactLogo.png'
import reduxx from '../../Assests/reduxx.png'
import js from '../../Assests/js.png'
import darkSpace from '../../Assests/darkSpace.jpg'
import meteoro from '../../Assests/meteoro.png'
import rocket from '../../Assests/rocket.png'

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="skills" id='skills'>
      <img src={darkSpace} className='skills_bg'/>
            <div className='skills_box'>

              <div className='skills_text'><h2>
                Skills
              </h2>
              <p>I have a wide range of skills that I am constantly expanding, looking for ways to improve myself and be a better developer</p>
              </div>


              <Carousel responsive={responsive} infinite={true} className='skills_slider'
              autoPlay autoPlaySpeed={2500}
              >
                <div className="item">
                  <img src={htmlLogoOK} alt='image' className='logo'/>
                  <h5>HTML</h5>
                </div>

                <div className="item">
                  <img src={cssLogo} alt='image' className='logo'/>
                  <h5>CSS</h5>
                </div>

                <div className="item">
                  <img src={reactLogo} alt='image' className='logo'/>
                  <h5>React</h5>
                </div>

                <div className="item">
                  <img src={reduxx} alt='image' className='logo'/>
                  <h5>Redux</h5>
                </div>

                <div className="item">
                  <img src={js} alt='image' className='logo'/>
                  <h5>JavaScript</h5>
                </div>

              </Carousel>


            </div>
            <img src={meteoro} alt='meteoro' className='skills_meteoro'/>
            {/* <img src={rocket} alt='rocket' className='skills_rocket_animation'/> */}
    </div>
  )
}