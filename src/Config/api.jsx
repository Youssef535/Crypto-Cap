export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;


export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;


/*import the trending coin API 

export const trending =
  'https://api.coingecko.com/api/v3/search/trending';

// import NFT List BETA COINGECKO API (Still working on it )

export const nft =  'https://api.coingecko.com/api/v3/nfts/list?order=h24_volume_native_asc&per_page=10&page=10'; // 404
// try to work with coingecko api for the exchange

// export const ExchangeList =  'https://api.coincap.io/v2/exchanges'; // success 200 */
