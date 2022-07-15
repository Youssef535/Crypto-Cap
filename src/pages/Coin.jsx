import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './Coin.css'
import { CryptoState } from '../Context'

const Coin = () => {

  const params = useParams()
  const [coin, setCoin] = useState([])

  const url = `https://api.coingecko.com/api/v3/coins/${params.id}`
  const  {currency,symbol} = CryptoState();

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2
    }).format(value);
  }
  console.log(coin);
  useEffect(() => {
      axios.get(url).then((res) => {
          setCoin(res.data)
      }).catch((error) => {
          console.log(error)
      })
  }, [])

  return (
    <div>
        <div className='coin-container'>
          <div className='coin-header'>
            <h1>{coin.name}</h1>
          </div>
          <div className='content'>
            <div className='rank'>
              <span className='rank-btn'># Rank {coin.market_cap_rank}</span>
            </div>
            <div className='info'>
              <div className='coin-heading'>
                {coin.image ? <img src={coin.image.small} alt={coin.name} /> : null}
                <p>{coin.name}</p>
                {coin.symbol ? <p>{coin.symbol.toUpperCase()}</p> : null}
              </div>
              <div className='coin-price'>

              {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
              
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Coin;