import React from 'react';
import logo from './logo.svg';
import './App.css';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

function App() {
  return (
    <div className="App">
      
      {/* <GuestList /> */}
      <UserSearch />
    </div>
  );
}

export default App;
