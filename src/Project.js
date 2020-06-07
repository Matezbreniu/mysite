import React from 'react';
import Link from './Link';
import './Project.css';

function Project(props) {
  return (
    <div className={`${props.project.class} projectContainer fadeIn`}>
      <h3 className='projectName'>{props.project.name}</h3>
      <div className='projectDescription'>{props.project.description}</div>
      <div className='projectTechnology'>{props.project.technology}</div>
      <div className='projectLinks'>
        <Link name='Strona' link={props.project.siteLink} />
        {props.project.repositoryLink && (
          <Link name='Kod' link={props.project.repositoryLink} />
        )}
      </div>
    </div>
  );
}
export default Project;
