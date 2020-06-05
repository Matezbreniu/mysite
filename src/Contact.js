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
      link: 'facebook',
      icon: faFacebook,
    },
    {
      name: 'Matezbreniu',
      link: 'facebook',
      icon: faGithub,
    },
    {
      name: 'Mateusz Bręk',
      link: 'facebook',
      icon: faLinkedinIn,
    },
    {
      name: 'matezbreniu@gmail.com',
      link: 'facebook',
      icon: faAt,
    },
    {
      name: '+48 783 469 216',
      link: 'facebook',
      icon: faPhone,
    },
  ];

  return (
    <div className='contactContainer'>
      {contactList.map((contact) => {
        return (
          <div key={contact.name} className='contact'>
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
