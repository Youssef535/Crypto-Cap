import './App.css';
import React from 'react';
import Navigationbar from './components/NavBar';
import NavRoutes from '../src/components/Routes';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <NavRoutes />
    </div>
  );
}

export default App;
