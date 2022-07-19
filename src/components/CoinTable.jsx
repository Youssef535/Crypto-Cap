import { useState, useEffect, React } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CoinList } from '../Config/api';
import { CryptoState } from '../Context';
import { Container, Form, Row, Table, Pagination } from 'react-bootstrap';



const CoinTable = () => {

const  [coins, setCoins] = useState([]);
const  [loading, setLoading] = useState(false);
const  { currency } = CryptoState();
const  [search, setSearch] = useState("");
const  [page, setPage] = useState(1);
const  navigate = useNavigate();
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2
  }).format(value);
}


  const getCoins = async () => {
    setLoading(true);
      const { data } = await axios.get(CoinList(currency));
      setCoins(data);
    setLoading(false);
  };


  useEffect(() => {
    getCoins();
  },[currency]);

  const handleChange = () => {
    return coins.filter(coin => coin.name.toLowerCase().includes(search)) || [];
  }


  return (
      <>
    <h3 className='text-center'>Cryptocurrency Prices By Market Cap</h3>
    <Container>
      <Row>
        <Form.Control  className='text-center-2'
            placeholder="Search For a Cryptocurrency"
            autoComplete="off" autoCorrect="off" autoCapitalize="off"
            onChange={(e) => setSearch(e.target.value)}
        /> 
      </Row>

      
        <Table responsive  striped bordered hover variant="dark" className='tab'>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Price</th>
              <th>24H Change</th>
              <th className='hide-mobile'>Market Cap</th>
            </tr>
          </thead>
          <tbody>
          
              {handleChange()
                .slice((page - 1) * 10, page * 10) 
                .map(coin => (
                <tr key={coin.id} 
                onClick={() => navigate(`/Coin/${coin.id}`)}>
                <td>
                  <img 
                    src={coin.image}
                    alt={coin.name}
                    style={{width: 35, height: 35, margin:5, padding:1}}></img>
                    {coin.symbol.toUpperCase()} 
                </td>
                <td>{formatCurrency(coin.current_price)}</td>
                <td>
                  <span className={coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"}>
                      {formatCurrency(coin.price_change_percentage_24h)}%
                  </span>
                </td>
                <td className='hide-mobile'>{formatCurrency(coin.market_cap)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      
          <Pagination className='justify-content-center'>
            <Pagination.First onClick={() => setPage(1)} />
            <Pagination.Prev onClick={() => setPage(page - 1)} />
            <Pagination.Item onClick={() => setPage(1)}>{1}</Pagination.Item>
            <Pagination.Item onClick={() => setPage(2)}>{2}</Pagination.Item>
            <Pagination.Item onClick={() => setPage(3)}>{3}</Pagination.Item>
            <Pagination.Item onClick={() => setPage(4)}>{4}</Pagination.Item>
            <Pagination.Item onClick={() => setPage(5)}>{5}</Pagination.Item>
            <Pagination.Next onClick={() => setPage(page + 1)} />
            <Pagination.Last onClick={() => setPage(5)} />
          </Pagination>
        </Container>
      </>
  );
}

export default CoinTable;
