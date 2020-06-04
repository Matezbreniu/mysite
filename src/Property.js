import React from 'react';

function Property(props) {
  return (
    <div
      style={{
        margin: '20px auto',
        width: '50%',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          margin: '20px auto',
          position: 'relative',
          width: 80,
          height: 80,
          backgroundColor: '#45474A',
          transform: 'rotate(45deg)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%) rotate(-45deg)',
            color: '#ffffff',
          }}
        >
          icon
        </div>
      </div>
      <div className='text'>
        <div
          style={{
            margin: '8px 0',
            color: '#45474A',
            fontWeight: 'bold',
          }}
        >
          {props.property.name}
        </div>
        <p
          style={{
            fontSize: '0.7rem',
          }}
        >
          {props.property.description}
        </p>
      </div>
    </div>
  );
}
export default Property;
