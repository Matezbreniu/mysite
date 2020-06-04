import React from 'react';
import Link from './Link';

function Project(props) {
  return (
    <div>
      <div>{props.project.name}</div>
      <div>
        <div className='slideDown'>
          <div>{props.project.description}</div>
          <div>{props.project.technology}</div>
        </div>
        <div className='slideUp'>
          <Link name='Strona' link={props.project.siteLink} />
          {props.project.repositoryLink && (
            <Link name='Kod' link={props.project.repositoryLink} />
          )}
        </div>
      </div>
    </div>
  );
}
export default Project;
