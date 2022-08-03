import { useState, useEffect, React } from 'react'
import axios from 'axios'
import { Container,Card } from 'react-bootstrap'


const CoinNews = 'https://newsdata.io/api/1/cryptoapikey=pub_9845a452909fd2b79e2b0482d2ccb749e7c0';

const News = () => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  
  

  return (
    <div>
      <h1>news</h1>
    </div>  
  )
}

export default News