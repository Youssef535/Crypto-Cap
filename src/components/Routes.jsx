import React from 'react';
import { Routes, Route } from 'react-router-dom';
import News from "../pages/News";
import NFT from "../pages/NFT";
import Exchange from "../pages/Exchange";
import Home from '../components/Home';
import Coin from '../pages/Coin';


const NavRoutes = () =>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="NFT" element={<NFT />} />
      <Route path="Exchange" element={<Exchange />} />
      <Route path="News" element={<News />} />
      <Route path="Coin/:id" element={<Coin />} />
    </Routes>

export default NavRoutes;