import {React,useState,useEffect} from 'react'
import { Container, Form, Table, Pagination } from 'react-bootstrap'
import axios from 'axios'
import { nft } from '../Config/api'


const NFT = () => {

    
  const [nfts, SetNFTs ] = useState([]);
  //const [search, setSearch] = useState("");
  //const [Page, setPage] = useState(1);
  const  [Loading, SetLoading] = useState(false);   // describe the status of async requests

  const getNFT = async () => {
    SetLoading(true);
    const data = await axios.get(nft);
    SetNFTs(data);
    SetLoading(false);
  };
  console.log(nfts);

  useEffect(() => {
    getNFT();
  },[]);

  /*const handleChange = () => {
    return NFTs.filter(NFTs => NFTs.name.toLowerCase().includes(search)) || [];
  } */

  // create the head of the table and then map throught the API content
  return (
    <>
    <h1 className='p-4'>Trending collections</h1>
    <Container>
    <Table responsive  striped bordered hover variant="dark" className='tab'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Contract Adress</th>
            </tr>
          </thead>
          <tbdoy>
            {nfts.map(nfts => (
              <tr>
                <td>{(nfts.name)}</td>
                <td>{(nfts.symbol)}</td>
                <td>{(nfts.contract_adress)}</td>
              </tr>
            ))}
      </tbdoy>
    </Table>
    </Container>
    </>
    
  )
}

export default NFT;
