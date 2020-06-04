import React from 'react';

function Header() {
  return (
    <header
      style={{
        height: '100vh',
        backgroundAttachment: 'fixed',
        backgroundImage: 'url(./banner.jpg)',
        backgroundPositionX: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '100%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          textAlign: 'center',
        }}
      >
        <h1>Mateusz Bręk</h1>
        <h3>Front-end Developer</h3>
      </div>
    </header>
  );
}
export default Header;
