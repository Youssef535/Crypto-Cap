export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

export const NFTcoin = {
    method: 'GET',
    url: 'https://top-nft-sales.p.rapidapi.com/collections/1d',
    headers: {
      'X-RapidAPI-Key': '2ab96d9ec9msh53ad8c155826209p15267ejsn9831b1935b52',
      'X-RapidAPI-Host': 'top-nft-sales.p.rapidapi.com'
    }
  };
  
  
