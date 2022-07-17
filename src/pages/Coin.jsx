import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './Coin.css'
import { CryptoState } from '../Context'
import { SingleCoin } from '../Config/api'
import { Table } from 'react-bootstrap'

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!coin) return <div>Loading...</div>;
  return (
    <div>
        <div className='coin-container'>
              <div className='coin-header'>
                <h1>{coin?.name}</h1>
              </div>
            <div className='content'>
              <div className='coin-rank'>
                  <h3>Rank: {coin?.market_cap_rank}</h3>
              </div>
              <div className="info">
                <div className='coin-heading'>
                    <img src={coin?.image.small} alt={coin?.name} />
                    <p>{coin.name}</p>
                    {coin.symbol ? <p>{coin.symbol.toUpperCase()}</p> : null}
                </div>
                <div className='coin-price'>
                    {symbol}{" "}
                    { coin?.market_data.current_price[currency.toLowerCase()].toFixed(2)}
                </div>
              </div>
            </div>
            <div className='content'>
            <table>
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>14d</th>
                                <th>30d</th>
                                <th>1yr</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{coin?.market_data.price_change_percentage_1h_in_currency[currency.toLowerCase()].toFixed(2)}%</td>
                                <td>{coin?.market_data.price_change_percentage_24h_in_currency[currency.toLowerCase()].toFixed(2)}%</td>
                                <td>{coin?.market_data.price_change_percentage_7d_in_currency[currency.toLowerCase()].toFixed(2)}%</td>
                                <td>{coin?.market_data.price_change_percentage_14d_in_currency[currency.toLowerCase()].toFixed(2)}%</td>
                                <td>{coin?.market_data.price_change_percentage_30d_in_currency[currency.toLowerCase()].toFixed(2)}%</td>
                                <td>{coin?.market_data.price_change_percentage_1y_in_currency[currency.toLowerCase()].toFixed(2)}%</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    </div>
  )
}

export default Coin;