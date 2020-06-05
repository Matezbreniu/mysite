import React from 'react';
import SectionTitle from './SectionTitle';
import Property from './Property';
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
    <section className='aboutMe'>
      <SectionTitle title='O mnie' />
      <div className='aboutMeContainer'>
        <div className='aboutMePropertiesContainer'>
          {propertiesList.map((property) => (
            <Property key={property.name} property={property} />
          ))}
        </div>
        <img className='aboutMeImage' src='/meBg.png' alt='Mateusz Bręk' />
        <div className='aboutMeInfo'>To ja</div>

        <div
          style={{
            textAlign: 'center',
          }}
          className='aboutMeDescrpiton'
        >
          Spełniam się grając od dziesięciu lat zawodowo w koszykówkę. Od dawna
          komputery były moją pasją, lecz dopiero w 2018 roku zapragnąłem bliżej
          poznać działanie internetu od strony technicznej. Zacząłem się uczyć i
          poznawać języki front-endu, zafascynowało mnie to, że wszystko można
          zaprojektować i zmieniać według własnych upodobań.
        </div>
        <div className='skills'></div>
      </div>
    </section>
  );
}
export default AboutMe;
