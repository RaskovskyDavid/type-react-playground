import React from 'react';
import logo from './logo.svg';
import './App.css';
import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';
import UserSearch from './refs/UserSearch';
function App() {
  return (
    <div className="App">
      
      {/* <GuestList /> */}
      {/* <UserSearch /> */}
      {/* <EventComponent /> */}
      <UserSearch />
    </div>
  );
}

export default App;
