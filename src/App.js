import './App.css';
import React from 'react';
import Navigationbar from './components/NavBar';
import coins from "./pages/Coin";
import Home from './components/Home';
import NavRoutes from '../src/components/Routes'









function App() {
  return (
    
    
      <div className="App">
      <Navigationbar />
      <Home />
      <NavRoutes/>
          
      </div>
    
  );
}



export default App;
