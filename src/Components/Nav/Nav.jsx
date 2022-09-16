import React, { useEffect } from 'react'
import './Nav.css'
import { FaRocket } from 'react-icons/fa'

export default function Nav() {

    const [scrolled, setScrolled] = React.useState(false)
    useEffect(() => {
        // var onScroll = () => {
        //     if (window.scrollY >= 100){
        //         setScrolled(true)
        //     } else {
        //         setScrolled(false)
        //     }
        // }
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100){
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        });
        // return () => window.removeEventListener('scroll', onScroll);
    }, [])

  return (
    <nav className={scrolled ? 'navbar scrolled': 'navbar'}>
    {/* <nav className='navbar'> */}
        <a className="navbar_logo" href='#home'>Thiago<span className='lif'>Lif</span></a>
        <ul className="navbar_list">
            {/* <li className="navbar_item">
                <a href="#home" className="navbar_a">Home</a>
            </li> */}
            <li className="navbar_item">
                <a href="#about" className="navbar_a">About</a>
            </li>
            <li className="navbar_item">
                <a href="#skills" className="navbar_a">Skills</a>
            </li>
            <li className='navbar_item'>
                <a href="#projects" className="navbar_a">Projects</a>
            </li>
            <li className="navbar_item">
                    <button className='navbar_button'>
                <a href="#contact" className="navbar_a">
                        <FaRocket/>
                </a>
                    </button>
            </li>
        </ul>
    </nav>
  )
}
