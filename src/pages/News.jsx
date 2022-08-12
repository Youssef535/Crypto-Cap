import { useState, useEffect, React } from 'react';
import { Container,Card } from 'react-bootstrap';
import axios from 'axios';



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

  
  return (
    <div>
      <h1>News Page </h1>
      <h4>Fetching api here for the news section</h4>
      <h4>{title.image}</h4>
    </div>  
  )
}

export default News