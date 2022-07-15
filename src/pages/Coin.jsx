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



  useEffect(() => {
    fetchCoin();
  },[]);



  return (
    <div>
      
    </div>

  )

};



  


export default Coin;