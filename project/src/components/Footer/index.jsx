import React from "react";
import s from './index.module.css'
import { SiInstagram, SiWhatsapp } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className={['wrapper', s.footer_container].join(' ')}>
        <div className={s.contacts_container} id='contacts'>
          <p  className={s.contacts}>Contact</p>
          <p className={s.telefon}>+49 999 999 99 99</p>
        
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
            <li>Linkstraße 2, 8 OG, 10785</li>
            <li>Berlin, Deutschland</li>
            <li>Working Hours:</li>
            <li>24 hours a day</li>
          </ul>
        </div>
    </footer>
  );
}
