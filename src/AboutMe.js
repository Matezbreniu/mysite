import React from 'react';
import SectionTitle from './SectionTitle';
import Property from './Property';
import Contact from './Contact';
import './AboutMe.css';

function AboutMe() {
  const propertiesList = [
    {
      name: 'Responsywne',
      description: 'Tworzę strony działające na każdym urządzeniu.',
      icon: 'faLaptopHouse',
    },
    {
      name: 'Przyjazne',
      description: 'Stawiam na przyjazny interfejs użytkownika.',
      icon: 'faUniversalAccess',
    },
    {
      name: 'Interaktywne',
      description: 'Strona musi reagować na działania użytkownika.',
      icon: 'faHandPaper',
    },
    {
      name: 'Atrakcyjne',
      description: 'Oprócz funkcjonalności strona powinna też cieszyć oko.',
      icon: 'faEye',
    },
  ];

  return (
    <section className='aboutMe' id='aboutMe'>
      <div className='wrapper'>
        <SectionTitle title='O mnie' id='AboutMe' />
        <div className='aboutMeContainer'>
          <div className='aboutMePropertiesContainer'>
            {propertiesList.map((property) => (
              <Property key={property.name} property={property} />
            ))}
          </div>
          <div className='aboutMeContactAndInfoContainer'>
            <Contact />
            <div className='aboutMeImageAndInfoContainer swipeFromRight'>
              <img
                className='aboutMeImage'
                src='/meBg.png'
                alt='Mateusz Bręk'
              />
              <div className='aboutMeInfoContainer'>
                <div className='aboutMeInfo'> To ja</div>
                <div className='aboutMeDescrpiton'>
                  Spełniam się grając od dziesięciu lat zawodowo w koszykówkę.
                  Od dawna komputery były moją pasją, lecz dopiero w 2018 roku
                  zapragnąłem bliżej poznać działanie internetu od strony
                  technicznej. Zacząłem się uczyć i poznawać języki front-endu,
                  zafascynowało mnie to, że wszystko można zaprojektować i
                  zmieniać według własnych upodobań.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
