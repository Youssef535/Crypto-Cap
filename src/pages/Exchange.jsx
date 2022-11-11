import {React, useEffect, useState} from 'react'
import { Container, Form, Pagination, Table, Col, Row } from 'react-bootstrap'
import { axios } from 'axios'

const Exchange = () => {
const [exchanges, SetExchanges] = useState([]);
const [loading, setLoading] = useState(false);
const [page, setPage] = useState(1); 
// const api = 'https://api.coincap.io/v2/exchanges';

const [news, setNews] = useState([]);
  // Add a Pagination if you changed the api to crypto I REMOVED FOR THE PERFORMANCE

  const newsAPI = async () =>{
    // just change the api from top-headline to crypto the app is under development
    // Please Visit newsapi.org
    let {data} = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=5fca490bd4d54b23a7143e2fbab1dea9');
    // eslint-disable-next-line no-lone-blocks
    { /*console.log("news",data);*/ }
    setNews(data.articles);
  }

  useEffect(() => {
    //componentDidMount
    newsAPI();
  }, [])


  return (
    <h1 className='p-4'>Exchange Market Rate </h1>
    
  )
}

export default Exchange