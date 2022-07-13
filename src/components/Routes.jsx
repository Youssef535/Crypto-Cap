import React from 'react';
import { Routes, Route } from 'react-router-dom';
import News from "../pages/News";
import NFT from "../pages/NFT";
import Exchange from "../pages/Exchange";




const NavRoutes = () =>
    <Routes>
      <Route path="NFT" element={<NFT />} />
      <Route path="Exchange" element={<Exchange />} />
      <Route path="News" element={<News />} />
      
    </Routes>

export default NavRoutes;