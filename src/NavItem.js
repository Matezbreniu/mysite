import React from 'react';

function NavItem(props) {
  return <li className={props.item.class}>{props.item.name}</li>;
}
export default NavItem;
