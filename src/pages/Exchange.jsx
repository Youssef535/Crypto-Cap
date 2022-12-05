import {React, useEffect, useState} from 'react'
import { Container, Form, Pagination, Table, Col, Row } from 'react-bootstrap'
import  axios  from 'axios'
import { exchangesAPI } from '../Config/api'

const Exchange = () => {
const [exchanges, SetExchanges] = useState([]);
const [loading, setLoading] = useState(false);
const [page, setPage] = useState(1); 

  
    // Please Visit coingecko api
    const fetchExchanges = async () => {
      setLoading(true);
        const  data  = await axios.get(exchangesAPI);
    {  console.log(data); }
        SetExchanges(data);
      setLoading(false);
    };
  
    useEffect(() => {
      fetchExchanges();
    },[]);
  
  return (
    <>
    <Container>
    <h3 className='p-4'>Top Crypto Exchanges Ranked by Trust Score </h3>
    <p className='text-secondary'>As of today, we track 541 crypto exchanges with a total 24h trading volume of $65 Billion  Currently, the 3 largest cryptocurrency exchanges are Binance, Coinbase Exchange, and KuCoin.</p>
    <Table responsive  striped bordered hover variant="dark" className='tab'> 
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>24h Volume</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </Table>
    </Container>
    </>
  )
}

export default Exchange