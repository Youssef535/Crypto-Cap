import {React,useState} from 'react'
import { Container, Form, Pagination } from 'react-bootstrap'
import axios from 'axios'


const NFT = () => {

    
  const [nfts, SetNFTs ] = useState([]);
  //const [search, setSearch] = useState("");
  //const [Page, setPage] = useState(1);
  
  return (
    // So my problem now is to work on the SEO tags after that i need to find an NFT API AND fetch it to my app 
    <>
    <h1 className='p-4'>Trending collections</h1>
    <Container>

    </Container>
    </>
  )
}

export default NFT;
