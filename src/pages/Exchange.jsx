import { React, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import { exchangesAPI } from '../Config/api';

const Exchange = () => {
  const [exchanges, SetExchanges] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchExchanges = async () => {
    setLoading(true);
    const data = await axios.get(exchangesAPI);
    {
      console.log(data);
    } // for the testing
    SetExchanges(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchExchanges();
  }, []);

  return (
    <>
      <Container>
        <h3 className="p-4">Top Crypto Exchanges Ranked by Trust Score </h3>
        <p className="text-secondary">
          As of today, we track 541 crypto exchanges with a total 24h trading volume of $65 Billion Currently, the 3
          largest cryptocurrency exchanges are Binance, Coinbase Exchange, and KuCoin.
        </p>
        <Table responsive striped hover variant="dark" className="tab">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>24h Volume</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {/* a map function here and get all the info from the api */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};
export default Exchange;
