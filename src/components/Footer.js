import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'


function Footer() {
  return (
    <>
        <section className='flex flex-col items-center px-6 border-t border-t-white pt-4 text-center'>
          <section>
            <ul className='space-x-4'>
              <a href="https://twitter.com/programminggreg">
                <FontAwesomeIcon icon={faTwitter} className='hover:cursor-pointer'/>
              </a>
              <FontAwesomeIcon icon={faDiscord} className='hover:cursor-pointer' />
              <FontAwesomeIcon icon={faInstagram} className='hover:cursor-pointer' />
            </ul>
          </section>
          <section>
            <p><FontAwesomeIcon icon={faCopyright} /> Copyright 2023</p>
            <p>Bass Logic, Inc.</p>
            <p>All right reserved</p>
          </section>
        </section>
    </>
  )
}

export default Footer