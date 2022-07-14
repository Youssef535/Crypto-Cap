import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleCoin } from '../Config/api';
import { CryptoState } from '../Context';
import { Container,Row,Col,Table } from 'react-bootstrap';


const Coin = () => {
const { id } = useParams();
const [coin, setCoin] = useState();
const { currency, symbol } = CryptoState();

// eslint-disable-next-line react-hooks/exhaustive-deps
const fetchCoin = async () => {
  const  response  = await axios.get(SingleCoin(id));

  setCoin(response);
};

console.log(coin);

  useEffect(() => {
    fetchCoin();
  },[]);



  return (
    <div>
      <h2>Working on the coin page </h2>
      <>
          {coin.data.coingecko_rank}
          {coin.data.name}
          {coin.data.symbol}
      </>
      
    </div>

  )

};



  


export default Coin;