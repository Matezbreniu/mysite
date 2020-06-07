import React from 'react';
import './SectionTitle.css';

function SectionTitle(props) {
  return (
    <>
      <h2 id={`title${props.id}`} className='title swipeFromRight'>
        {props.title}
      </h2>
      <div className='bar swipeFromRight'></div>
    </>
  );
}
export default SectionTitle;
