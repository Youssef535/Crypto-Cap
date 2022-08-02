import { useState, useEffect, React } from 'react'
import axios from 'axios'
import { CoinNews } from '../Config/api'
import { Container,Card } from 'react-bootstrap'




const News = () => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  
  const getNews = async () => {
    setLoading(true);
    const data = await axios.get(CoinNews);
    setNews(data);
    setLoading(false);
  };
  console.log(CoinNews);
  useEffect(() => {
    getNews();
  },[]);


  return (
    <div>
      <h1>news</h1>
    </div>  
  )
}

export default News