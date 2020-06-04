import React from 'react';

function Property(props) {
  return (
    <div>
      <div> icon</div>
      <div className='text'>
        <div>{props.property.name}</div>
        <div>{props.property.description}</div>
      </div>
    </div>
  );
}
export default Property;
