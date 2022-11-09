import {React, useEffect, useState} from 'react'
import { Container, Form, Pagination, Table, Col, Row } from 'react-bootstrap'
import { axios } from 'axios'

const Exchange = () => {
const [exchanges, SetExchanges] = useState([]);
const [loading, setLoading] = useState(false);
const [page, setPage] = useState(1); 
// const api = 'https://api.coincap.io/v2/exchanges';

  return (
    <h1 className='p-4'>Exchange Market Rate </h1>
    
  )
}

export default Exchange