import {React,useState,useEffect} from 'react'
import { Container, Form, Row, Table, Pagination } from 'react-bootstrap'
import axios from 'axios'
import { nft } from '../Config/api'


const NFT = () => {

    
  const [NFTs, SetNFTs ] = useState([]);
  const [search, setSearch] = useState("");
  const [Page, setPage] = useState(1);
  //  describe the status of async requests
  const  [Loading, SetLoading] = useState(false);

  const getNFT = async () => {
    SetLoading(true);
    const data = await axios.get(nft);
    SetNFTs(data);
    SetLoading(false);
  };
  console.log(NFTs);

  useEffect(() => {
    getNFT();
  },[]);

  const handleChange = () => {
    return NFTs.filter(NFTs => NFTs.name.toLowerCase().includes(search)) || [];
  }
  

  return (
    
    <h1>Trending collections</h1>
  )
}

export default NFT;
