import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAt, faPhone} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

function Contact() {
  const contactList = [
    {
      name: 'Mateusz Bręk',
      platform: 'facebook',
      link: 'facebook',
      icon: faFacebook,
    },
    {
      name: 'Matezbreniu',
      platform: 'github',
      link: 'facebook',
      icon: faGithub,
    },
    {
      name: 'Mateusz Bręk',
      platform: 'linkedin',
      link: 'facebook',
      icon: faLinkedinIn,
    },
    {
      name: 'matezbreniu@gmail.com',
      platform: 'e-mail',
      link: 'facebook',
      icon: faAt,
    },
    {
      name: '+48 783 469 216',
      platform: 'telephone',
      link: 'facebook',
      icon: faPhone,
    },
  ];

  return (
    <div className='contactContainer'>
      {contactList.map((contact) => {
        return (
          <div key={contact.platform} className='contact swipeFromLeft'>
            <FontAwesomeIcon
              style={{width: 30, height: 30}}
              className='contactIcon'
              icon={contact.icon}
            />
            <div className='contactDescription'>{contact.name}</div>
          </div>
        );
      })}
    </div>
  );
}
export default Contact;
