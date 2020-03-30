import React from 'react';
import './App.css';
import HomePage from './components/homepage.component';
import Sidebar from './components/sidebar.component';
import Navbar from './components/navbar.component';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <Sidebar />
          <HomePage />
        </div>
      </div>
    </div>
  );
}

export default App;
