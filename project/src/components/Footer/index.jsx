import React from "react";
import s from './index.module.css'
import { SiInstagram, SiWhatsapp } from 'react-icons/si'


export default function Footer() {
  
  return (
    <footer className={s.footer_container}>
      <div>
        <div className={s.contacts_container} id='contacts'>
          <p  className={s.contacts}>Contact</p>
          <p className={s.telefon}>+49 123 456 789</p>
        
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
            <li>Obstalee 1, 12345</li>
            <li>Berlin, Deutschland</li>
            <li>Working Hours:</li>
            <li>24 hours a day</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

