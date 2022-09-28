import {React,useState,useEffect} from 'react'
import { Container, Form, Row, Table, Pagination } from 'react-bootstrap'
import axios from 'axios'
import { trending } from '../Config/api'


const Trend = () => {

    
  const [Trend, SetTrend ] = useState();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  

  return (
    
    <h1>Trending Coins</h1>
    
  )
}

export default Trend;