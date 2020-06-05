import React from 'react';
import Scrollspy from 'react-scrollspy';
import './NavList.css';

function NavList() {
  const handleClick = (e) => {
    const className = e.target.className;
    const navList = document.querySelector('.navList');
    const navBurger = document.querySelector('.navBurger');
    if (className === 'navBurger' || className === 'navBurger active') {
      navList.classList.toggle('active');
      navBurger.classList.toggle('active');
    }
    if (className === 'navItem' || className === 'navLink') {
      navList.classList.remove('active');
      navBurger.classList.remove('active');
    }
  };

  const navList = [
    {name: 'Start', id: 'header'},
    {name: 'O mnie', id: 'aboutMe'},
    {name: 'Projekty', id: 'projects'},
    {name: 'Umiejętności', id: 'skills'},
  ];
  return (
    <nav className='navContainer'>
      <div className='navBurger' onClick={handleClick}>
        <div className='navBurgerLine'></div>
      </div>
      <Scrollspy
        className='navList'
        items={['header', 'aboutMe', 'projects', 'skills']}
        currentClassName='activeSection'
      >
        {navList.map((item) => (
          <li onClick={handleClick} key={item.name} className='navItem'>
            <a className='navLink' href={'#' + item.id}>
              {item.name}
            </a>
          </li>
        ))}
      </Scrollspy>
    </nav>
  );
}
export default NavList;
