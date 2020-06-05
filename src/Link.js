import React from 'react';
import './Link.css';

function Link(props) {
  return (
    <a className='link' href={props.link}>
      {props.name}
    </a>
  );
}
export default Link;
