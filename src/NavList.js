import React from 'react';
import NavItem from './NavItem';

function NavList() {
  const navList = [
    {name: 'Start', class: 'start'},
    {name: 'O mnie', class: 'aboutMe'},
    {name: 'Projekty', class: 'projects'},
    {name: 'Kontakt', class: 'contact'},
  ];
  return (
    <nav>
      <ul>
        {navList.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  );
}
export default NavList;
