import React from 'react';
import SectionTitle from './SectionTitle';
import Property from './Property';

function AboutMe() {
  const propertiesList = [
    {
      name: 'Responsywne',
      description: 'Tworzę strony działające na każdym urządzeniu.',
      icon: '',
    },
    {
      name: 'Przyjazne',
      description: 'Stawiam na przyjazny interfejs użytkownika.',
      icon: '',
    },
    {
      name: 'Interaktywne',
      description: 'Strona musi reagować na działania użytkownika.',
      icon: '',
    },
    {
      name: 'Atrakcyjne',
      description: 'Oprócz funkcjonalności strona powinna też cieszyć oko.',
      icon: '',
    },
  ];

  return (
    <section className='aboutMe'>
      <SectionTitle title='O mnie' />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {propertiesList.map((property) => (
          <Property key={property.name} property={property} />
        ))}
      </div>

      <img src='' alt='' />
      <div
        style={{
          textAlign: 'center',
        }}
        className='descrpiton'
      >
        Spełniam się zawodowo grając od dziesięciu lat w koszykówkę. Od dawna
        komputery były moją pasją, lecz dopiero w 2018 roku zapragnąłem bliżej
        poznać działanie internetu od strony technicznej. Zacząłem się uczyć i
        poznawać języki front-endu, zafascynowało mnie to, że wszystko można
        zaprojektować i zmieniać według własnych upodobań.
      </div>
      <div className='skills'></div>
    </section>
  );
}
export default AboutMe;
