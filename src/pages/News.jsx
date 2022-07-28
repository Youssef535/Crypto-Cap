import { useState, useEffect, React } from 'react'
import axios from 'axios'
import { CoinNews } from '../Config/api'
import { Container } from 'react-bootstrap'




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