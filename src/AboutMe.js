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
      {propertiesList.map((property) => (
        <Property key={property.name} property={property} />
      ))}
      <img src='' alt='' />
      <div className='descrpiton'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
        tenetur reiciendis reprehenderit corrupti ulla!
      </div>
      <div className='skills'></div>
    </section>
  );
}
export default AboutMe;
