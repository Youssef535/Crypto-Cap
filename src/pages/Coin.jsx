import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { CryptoState } from '../Context';
import { SingleCoin } from '../Config/api';
import { Container, Table } from 'react-bootstrap';
import DOMPurify from 'dompurify';
import { numberWithCommas } from '../components/CoinTable';
import './Coin.css';

// AS YOU SEE WE NEED TO FORMAT OUR NUMBERS  WE HAVE MANY OPTIONS WE IMPORT FORMAT_CURENCY OR
// WE CAN MAKE A FUNCTION USING REGX

const Coin = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };
  useEffect(() => {
    fetchCoin();
  }, []);

  if (!coin) return <div>Loading...</div>;
  return (
    <Container>
      <div>
        <div className="container">
          <div className="content">
            <h1>{coin?.name}</h1>
          </div>
          <div className="content">
            <div className="coin-rank">
              <span className="rank-btn">Rank : {coin?.market_cap_rank}</span>
            </div>
            <div className="info">
              <div className="coin-heading">
                <img src={coin?.image.small} alt={coin?.name} />
                <p>{coin.name}</p>
                {coin.symbol ? <p>{coin.symbol.toUpperCase()}</p> : null}
              </div>
              <div className="coin-price">
                {symbol} <h3>{coin?.market_data.current_price[currency.toLowerCase()].toFixed(2)}</h3>
              </div>
            </div>
          </div>
          <div className="content">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>1h</th>
                  <th>24h</th>
                  <th>7d</th>
                  <th>14d</th>
                  <th className="hide-mobile">30d</th>
                  <th className="hide-mobile">1yr</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {coin?.market_data.price_change_percentage_1h_in_currency[currency.toLowerCase()].toFixed(1)}%
                  </td>
                  <td>
                    {coin?.market_data.price_change_percentage_24h_in_currency[currency.toLowerCase()].toFixed(1)}%
                  </td>
                  <td>
                    {coin?.market_data.price_change_percentage_7d_in_currency[currency.toLowerCase()].toFixed(1)}%
                  </td>
                  <td>
                    {coin?.market_data.price_change_percentage_14d_in_currency[currency.toLowerCase()].toFixed(1)}%
                  </td>
                  <td className="hide-mobile">
                    {coin?.market_data.price_change_percentage_30d_in_currency[currency.toLowerCase()].toFixed(2)}%
                  </td>
                  <td className="hide-mobile">
                    {coin?.market_data.price_change_percentage_1y_in_currency[currency.toLowerCase()].toFixed(2)}%
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="content">
            <div className="stats">
              <div className="left">
                <div className="row">
                  <h4>24 Hour Low</h4>
                  {coin?.market_data.low_24h[currency.toLowerCase()].toFixed(2)}
                  {symbol}
                  {''}
                </div>
                <div className="row">
                  <h4>24 Hour Heigh</h4>
                  {coin?.market_data.high_24h[currency.toLowerCase()].toFixed(2)}
                  {symbol} {''}
                </div>
              </div>
              <div className="right">
                <div className="row">
                  <h4>Market Cap</h4>
                  {numberWithCommas(coin?.market_data.market_cap[currency.toLowerCase()])}
                  {symbol} {''}
                </div>
                <div className="row">
                  <h4>Circulating Supply</h4>
                  {coin?.market_data.circulating_supply.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="coin-description">
            <h3>About </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(coin.description ? coin.description.en : '')
              }}
            ></p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Coin;
