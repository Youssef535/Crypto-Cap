import { useState, useEffect, React } from 'react'
import axios from 'axios'
import { Container,Card } from 'react-bootstrap'


const options = {
  method: 'GET',
  url: 'https://crypto-news-live3.p.rapidapi.com/news',
  headers: {
    'X-RapidAPI-Key': '2ab96d9ec9msh53ad8c155826209p15267ejsn9831b1935b52',
    'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


const News = () => {

  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  
  

  if (!news) return ("Loading...");

  return (
    <div>
      <h1>{news.bitcoin}</h1>
    </div>  
  )
}

export default News