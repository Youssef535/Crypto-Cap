import './App.css';
import React from 'react'
import Navigationbar from './components/NavBar';
import { Routes , Route } from "react-router-dom";
import NFT from './components/NFT';
import Exchange from './components/Exchange';
import News from './components/News';
import Home from './pages/Home';
import coins from "./pages/Coin";



function App() {
  return (
      <div className="App">
        <Navigationbar />
        <Home/>
        <>
            <Routes>
              <Route path="/NFT" element={<NFT />} />
              <Route path="/Exchange" element={<Exchange />} />
              <Route path="/News" element={<News />} />
              <Route path="/" element={Home} exact />
              <Route path="/coins/:id" element={coins} exact />
            </Routes>
            </>
      </div>
  );
}


export default App;
