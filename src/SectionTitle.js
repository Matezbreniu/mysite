import React from 'react';
import './SectionTitle.css';

function SectionTitle(props) {
  return (
    <>
      <h2 className='title'>{props.title}</h2>
      <div className='bar'></div>
    </>
  );
}
export default SectionTitle;
