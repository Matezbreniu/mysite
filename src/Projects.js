import React from 'react';
import SectionTitle from './SectionTitle';
import Project from './Project';

function Projects() {
  const projectsList = [
    {
      name: 'Weather App',
      description: 'Aplikacja pogodowa z wykorzystaniem API',
      technology: 'React.js',
      siteLink: 'dsaasd',
      repositoryLink: 'dsadsa',
    },
    {
      name: 'Sportregeneracja.com',
      description: 'Strona projektu sportowej regeneracji',
      technology: 'HTML/CSS/JS',
      siteLink: 'https://www.sportregeneracja.com',
    },
    {
      name: 'Swiezaskibka.pl',
      description: 'Formularz zamówień dla dostawcy pieczywa',
      technology: 'React.js',
      siteLink: 'https://www.swiezaskibka.pl',
      repositoryLink: 'dsadsa',
    },
  ];
  return (
    <section className='projects'>
      <SectionTitle title='Projekty' />
      <div>
        {projectsList.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
export default Projects;
