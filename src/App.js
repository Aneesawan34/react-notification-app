// import logo from './logo.svg';
import React from 'react';
import ReactNotification from './component/ReactNotification';
import About from './component/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{height:'50px'}}></div>
      <ReactNotification />
      <div style={{height:'50px'}}></div>
      <About />
    </div>
  );
}

export default App;
