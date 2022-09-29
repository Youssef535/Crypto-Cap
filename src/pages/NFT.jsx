import {React,useState,useEffect} from 'react'
import { Container, Form, Row, Table, Pagination } from 'react-bootstrap'
import axios from 'axios'
import { nfts } from '../Config/api'


const Trend = () => {

    
  const [nfts, Setnfts ] = useState();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  

  return (
    
    <h1>Top NFT in the market</h1>
    
  )
}

export default Trend;