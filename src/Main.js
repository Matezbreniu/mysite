import React, {Component} from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

class Main extends Component {
  setAnimationPosition = () => {
    gsap.set('.swipeFromLeft', {
      x: '-200%',
      opacity: 0,
    });
    gsap.set('.swipeFromRight', {
      x: '200%',
      opacity: 0,
    });
    gsap.set('.swipeFromBottom', {
      y: '200px',
      opacity: 0,
    });
    gsap.set('.fadeIn', {
      opacity: 0,
    });
  };

  titleAnimation = () => {
    const titleList = document.querySelectorAll('.title');
    titleList.forEach((title) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: `#${title.id}`,
          start: 'bottom 80%',
        },
      });
      tl.to(`#${title.id}`, {
        x: 0,
        duration: 0.5,
        opacity: 1,
      });
      tl.to(
        `#${title.id}~.bar`,
        {
          x: 0,
          duration: 0.5,
          opacity: 1,
        },
        0.2
      );
      return null;
    });
  };
  propertyAnimation = () => {
    const propertyContainerList = document.querySelectorAll(
      '.propertyContainer'
    );
    propertyContainerList.forEach((propertyContainer, index) => {
      const propertyIcon = propertyContainer.childNodes[0].childNodes[0];
      const timeDelay = index * 0.5;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.propertyContainer',
          start: 'bottom 80%',
        },
      });
      tl.to(
        propertyContainer,
        {
          x: 0,
          opacity: 1,
        },
        timeDelay
      );
      tl.to(propertyIcon, {
        opacity: 1,
      });

      return null;
    });
  };
  contactAnimation = () => {
    const contactList = document.querySelectorAll('.contact');
    contactList.forEach((contact, index) => {
      const timeDelay = index * 0.125;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.contact',
          start: 'bottom 80%',
        },
      });
      tl.to(
        contact,
        {
          x: 25,
          opacity: 1,
        },
        timeDelay
      );
      tl.to(contact, {
        x: 0,
      });
      tl.to(contact, {
        x: 10,
      });
      tl.to(contact, {
        x: 8,
      });
      return null;
    });
  };
  aboutMeAnimation = () => {
    gsap.to('.aboutMeImageAndInfoContainer', {
      scrollTrigger: {
        trigger: '.aboutMeImageAndInfoContainer',
        start: 'bottom 80%',
      },
      x: 0,
      opacity: 1,
    });
  };
  projectAnimation = () => {
    const projectList = document.querySelectorAll('.projectContainer');
    projectList.forEach((project) => {
      gsap.to(project, {
        scrollTrigger: {
          trigger: project,
          start: 'bottom 80%',
        },
        duration: 1,
        opacity: 1,
      });
    });
  };
  skillAnimation = () => {
    const skillList = document.querySelectorAll('.skill');
    skillList.forEach((skill, index) => {
      const timeDelay = index * 0.125;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.skillsContainer',
          start: 'bottom 100%',
        },
      });
      tl.to(
        skill,
        {
          y: -25,
          opacity: 1,
        },
        timeDelay
      );
      tl.to(skill, {
        y: 0,
      });
      tl.to(skill, {
        y: -10,
      });
      tl.to(skill, {
        y: -8,
      });
      return null;
    });
  };

  componentDidMount() {
    gsap.registerPlugin(ScrollTrigger);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.setAnimationPosition();

    //Animations
    this.titleAnimation();
    this.propertyAnimation();
    this.contactAnimation();
    this.aboutMeAnimation();
    this.projectAnimation();
    this.skillAnimation();
  }
  render() {
    return (
      <main>
        <AboutMe />
        <Projects />
        <Skills />
      </main>
    );
  }
}
export default Main;
