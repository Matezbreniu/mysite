import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

function Main() {
  return (
    <main>
      <div
        style={{
          margin: '0 auto',
          width: '90%',
        }}
        className='wrapper'
      >
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
export default Main;
