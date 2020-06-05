import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';

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
        <Skills />
      </div>
    </main>
  );
}
export default Main;
