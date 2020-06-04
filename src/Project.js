import React from 'react';
import Link from './Link';

function Project(props) {
  return (
    <div
      className='projectWrapper'
      style={{
        position: 'relative',
        width: '100%',
        height: '200px',
        textAlign: 'center',
      }}
    >
      <div
        className='projectName'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff',
        }}
      >
        <h3
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        >
          {props.project.name}
        </h3>
      </div>
      <div
        className='projectInfo'
        style={{
          position: 'absolute',
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'space-around',
          justifyContent: 'center',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff',
          zIndex: 1,
        }}
      >
        <div
          className='projectDescription'
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '80%',
            height: '50%',
            justifyContent: 'center',
            alignItems: 'space-around',
          }}
        >
          <div>{props.project.description}</div>
          <div>{props.project.technology}</div>
        </div>
        <div
          className='projectLinks'
          style={{
            display: 'flex',
            width: '80%',
            height: '30%',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
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
