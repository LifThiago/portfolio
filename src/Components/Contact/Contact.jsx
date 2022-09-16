import React from 'react'
import './Contact.css' 
import darkSpace from '../../Assests/darkSpace.jpg'

export default function Contact() {
  return (
    <div className='contact'>
        <img src={darkSpace} className='contact_bg'/>
        <div className="contact_banner">
          <div className="contact_big">
            <h1 className="contact_title">Let's explore together!</h1>
            <h2 className="contact_subtitle">Dare to adventure with me</h2>
          </div>
              <ul className="contact_list">
                <li className="contact_item">Gmail</li>
                <li className="contact_item">LinkedIn</li>
                <li className="contact_item">WhatsApp</li>
              </ul>
        </div>
    </div>
  )
}
