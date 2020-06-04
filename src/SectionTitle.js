import React from 'react';

function SectionTitle(props) {
  return (
    <>
      <h2
        style={{
          margin: 10,
          textAlign: 'center',
          color: '#45474A',
          fontSize: '2rem',
          textTransform: 'uppercase',
        }}
      >
        {props.title}
      </h2>
      <div
        style={{
          width: 80,
          height: 4,
          backgroundColor: '#45474A',
          margin: '0 auto 50px',
        }}
      ></div>
    </>
  );
}
export default SectionTitle;
