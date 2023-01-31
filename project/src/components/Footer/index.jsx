import React from "react";
import s from './index.module.css'
import { SiInstagram, SiWhatsapp } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className={['wrapper', s.footer_container].join(' ')}>
        <div className={s.contacts_container} id='contacts'>
          <p  className={s.contacts}>Contacts</p>
          <p className={s.telefon}>+49 123 456 78 9</p>
        
          <div className={s.media_container}>
            <a href="https://www.instagram.com/" target='blank'>Instagram</a>
            <a href="https://www.whatsapp.com/" target='blank'>WhatsApp</a>

            <SiInstagram  className={s.instagram_logo}/> 
            <SiWhatsapp className={s.whatsapp_logo}/> 
          </div> 
        </div>

        <div className={s.address_container}>
          <ul> 
            <li>Address</li>
            <li>Berliner Allee 123</li>
            <li>12345 Berlin</li>
            <li>Working mode</li>
            <li>24/day</li>
          </ul>
        </div>
    </footer>
  );
}
