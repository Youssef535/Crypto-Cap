import {React,useState} from 'react'
import { Container, Form, Pagination } from 'react-bootstrap'
import axios from 'axios'


const NFT = () => {

    
  const [nfts, SetNFTs ] = useState([]);
  //const [search, setSearch] = useState("");
  //const [Page, setPage] = useState(1);
  
  return (
    // Build a static webpage API won't work
    <>
    <h1 className='p-4'>Trending collections</h1>
    <Container>

    </Container>
    </>
  )
}

export default NFT;
