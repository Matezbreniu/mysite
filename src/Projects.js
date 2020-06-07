import React from 'react';
import SectionTitle from './SectionTitle';
import Project from './Project';
import './Projects.css';

function Projects() {
  const projectsList = [
    {
      name: 'Weather App',
      class: 'weatherApp',
      description: 'Aplikacja pogodowa z wykorzystaniem API',
      technology: 'React.js',
      siteLink: 'dsaasd',
      repositoryLink: 'dsadsa',
    },
    {
      name: 'Sportregeneracja.com',
      class: 'sportregeneracja',
      description: 'Strona projektu sportowej regeneracji',
      technology: 'HTML/CSS/JS',
      siteLink: 'https://www.sportregeneracja.com',
    },
    {
      name: 'Swiezaskibka.pl',
      class: 'swiezaskibka',
      description: 'Formularz zamówień dla dostawcy pieczywa',
      technology: 'React.js',
      siteLink: 'https://www.swiezaskibka.pl',
      repositoryLink: 'dsadsa',
    },
  ];
  return (
    <section className='projects' id='projects'>
      <div className='wrapper'>
        <SectionTitle title='Projekty' id='Projects' />
        <div className='projectsContainer'>
          {projectsList.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
