import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import NavList from './NavList';

function Main() {
  return (
    <main>
      <NavList />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}
export default Main;
