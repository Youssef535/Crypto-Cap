import {React, useEffect, useState} from 'react'
import { Container, Form, Pagination, Table, Col, Row } from 'react-bootstrap'
import { axios } from 'axios'

const Exchange = () => {
const [exchanges, SetExchanges] = useState([]);
const [loading, setLoading] = useState(false);
const [page, setPage] = useState(1); 
const [news, setNews] = useState([]);  
  
  const newsAPI = async () =>{
    
    // Please Visit newsapi.org
    let {data} = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=5fca490bd4d54b23a7143e2fbab1dea9');
    
    { /*console.log(data);*/ }
    setNews(data.articles);
  }
  useEffect(() => {
    //componentDidMount
    newsAPI();
  }, []);
  return (
    <h1 className='p-4'>Exchange Market Rate </h1>
    
  )
}

export default Exchange