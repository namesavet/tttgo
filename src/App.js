import React from 'react';
import './App.css';
import Navbar1 from './components/Navbar';
import Bander from './components/bandner';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
      <Navbar1></Navbar1>
      <Bander></Bander>
      <Menu></Menu>
    </div>
  );
}

export default App;
