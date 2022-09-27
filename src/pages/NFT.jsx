import {React,useState,useEffect} from 'react'
import { Container, Form, Row, Table, Pagination } from 'react-bootstrap';
import axios from 'axios';



const NFT = () => {

    
  
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  

  const options = {
    method: 'GET',
    url: 'https://top-nft-sales.p.rapidapi.com/collections/1d',
    headers: {
      'X-RapidAPI-Key': '2ab96d9ec9msh53ad8c155826209p15267ejsn9831b1935b52',
      'X-RapidAPI-Host': 'top-nft-sales.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  return (
    <h1>NFT Marketplace</h1>
  )
}








export default NFT;