import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faSnapchat, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='Footer'>
       <div className='icon'>
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faSnapchat} />
      <FontAwesomeIcon icon={faYoutube} />
      </div>
      <p>Designed by <Link to=''> nasvaabbas@gmail.com </Link></p>

    </div>
   
  )
}

export default Footer