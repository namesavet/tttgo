import React from 'react';
import './App.css';
import LoginWithPhone from './Loginpage/LoginWithPhone'
import Navbar1 from './components/Navbar';
import Bander from './components/bandner';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
       
      </header> */}
      <div className="LoginWithphone" style={{margin:'auto',padding:'10%'}}>
        <LoginWithPhone/>
      </div>
        
      
      <Navbar1></Navbar1>
      <Bander></Bander>
      <Menu></Menu>
    </div>
  );
}

export default App;
