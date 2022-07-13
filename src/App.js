import './App.css';
import React from 'react';
import Navigationbar from './components/NavBar';
import { Routes , Route, BrowserRouter as Router } from "react-router-dom";
import coins from "./pages/Coin";
import Banner from "./components/Banner/Banner.jsx";
import Table from "./components/CoinTable";
import News from "./pages/News";
import NFT from "./pages/NFT";
import Exchange from "./pages/Exchange";
import NoPage from "./pages/NoPage";



function App() {
  return (
    
    <Router>
      <div className="App">
      <Navigationbar />
        <Banner/>
        <Table/>
          <>
            <Routes>
                
                <Route path="Exchange" element={<Exchange/>} />
                <Route path="NFT" element={<NFT/>} />
                <Route path="News" element={<News />} />
                <Route path="/coins/:id" element={coins} exact />
            </Routes>
          </>
      </div>
      </Router>
  );
}



export default App;
