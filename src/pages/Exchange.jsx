import {React, useEffect, useState} from 'react'
import { Container, Form, Pagination, Table, Col, Row } from 'react-bootstrap'
import { axios } from 'axios'

const Exchange = () => {
const [exchanges, SetExchanges] = useState([]);
const [loading, setLoading] = useState(false);
const [page, setPage] = useState(1); 
// const api = 'https://api.coincap.io/v2/exchanges';

var config = {
  method: 'get',
  url: 'api.coincap.io/v2/exchanges',
  headers: { }
};

axios.get(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

  return (
    <h1 className='p-4'>Exchange Market Rate </h1>
    
  )
}

export default Exchange