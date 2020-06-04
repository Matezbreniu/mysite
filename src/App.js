import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import NavList from './NavList';

function App() {
  return (
    <div className='App'>
      <Header />
      <NavList />
      <Main />
    </div>
  );
}

export default App;
