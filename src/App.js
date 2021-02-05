// import logo from './logo.svg';
import React from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactNotification from './Component/ReactNotification';
import About from './Component/About';
import './App.css';
function App() {

  return (
    <div className="App">
       <ToastContainer autoClose={2000} position="top-center" />
      <div style={{height:'50px'}}></div>
      <ReactNotification />
      <div style={{height:'50px'}}></div>
      <About />
    </div>
  );
}

export default App;
