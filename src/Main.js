import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';

function Main(props) {
  return (
    <main>
      <div className='wrapper'>
        <AboutMe />
        <Projects />
        <Skills />
      </div>
    </main>
  );
}
export default Main;
