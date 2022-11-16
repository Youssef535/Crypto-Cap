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
        SetExchanges(data);
      setLoading(false);
    };
  
    useEffect(() => {
      fetchExchanges();
    },[]);
  
  return (
    <Container>
      <Row>
      <h1 className='p-4'>Exchange Market Rate </h1>
      
      </Row>
    </Container>
  )
}

export default Exchange