import './App.css';
import React from 'react';
import Navigationbar from './components/NavBar';
import { Routes , Route, BrowserRouter as Router } from "react-router-dom";
import NFT from './components/NFT';
import Exchange from './components/Exchange';
import News from './components/News';
import coins from "./pages/Coin";
import Banner from "./components/Banner/Banner.jsx";
import Table from "./components/CoinTable";


function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <Banner/>
        <Table/>
          <>
            <Routes>
                <Route path="/NFT" element={<NFT />} />
                <Route path="/Exchange" element={<Exchange />} />
                <Route path="/News" element={<News />} />
                <Route path="/coins/:id" element={coins} exact />
            </Routes>
          </>
      </div>
    </Router>
  );
}


export default App;
