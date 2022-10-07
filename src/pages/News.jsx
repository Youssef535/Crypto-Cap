import { useState, useEffect, React } from 'react';
import { Container,Card,Col,Row,Button } from 'react-bootstrap';
import axios from 'axios';
import Scroll_Top from '../components/Scroll_Top';



const News = () => {

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
    <div>
      <h1 className='p-4'>Last News  </h1>
       {/* display all trending news  */}
      <Container>
        <Row>
          {news.map(news => (
            <Col key={news.title} md={4}>
              <Card className='bg-dark ' style={{ margin:"10px", cursor:"pointer"}}>
                <Card.Img variant="top" src={news.urlToImage}  />
                <Card.Body>
                  <Card.Title>{news.title && news.title.length > 60 ? news.title.substring(0, 60) + "..." : news.title}</Card.Title>
                  <Card.Text>
                    {/* working with the news character */}
                    {news.description && news.description.length > 80 ? news.description.substring(0, 80) + "..." : news.description}
                    
                  </Card.Text>
                  <Button variant="primary" className='link' href={news.url}>Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          </Row>
          {/* Working on the pagination */}
      </Container>
      
      <Scroll_Top />

    </div>  

  )
}

export default News