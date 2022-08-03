import { useState, useEffect, React } from 'react'
import axios from 'axios'
import { Container,Card } from 'react-bootstrap'







const News = () => {

  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  
  
  return (
    <div>
      <h1>News Page </h1>
      <h4>api</h4>
    </div>  
  )
}

export default News