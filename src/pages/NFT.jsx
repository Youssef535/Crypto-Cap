import {React,useState,useEffect} from 'react'
import { Container, Form, Row, Table, Pagination } from 'react-bootstrap';
import axios from 'axios';



const NFTS = () => {

  const [NFTcoin, setNFT] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  // add or export a function to Format The currency 


}




export const NFT = () => {
  return (
    <h1>Top NFT Collections</h1>
  )
}



export default NFT