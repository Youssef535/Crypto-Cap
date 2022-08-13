import { useState, useEffect, React } from 'react';
import { Container,Card,Col,Row,Form,Pagination } from 'react-bootstrap';
import axios from 'axios';




const News = () => {

  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const newsAPI = async () =>{
    let {data} = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5fca490bd4d54b23a7143e2fbab1dea9');
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
      <h1>Last News  </h1>
       {/* display all trending news  */}
      <Container>
        <Row>
        <Form.Control  className='text-center-2'
            placeholder="Search For The Last News "
            autoComplete="off" autoCorrect="off" autoCapitalize="off"
            onChange={(e) => setSearch(e.target.value)}
            
        /> 
          {news.map(news => (
            <Col key={news.title} md={4}>
              <Card className='bg-dark' style={{ margin:"10px", cursor:"pointer" }}>
                <Card.Img variant="top" src={news.urlToImage} />
                <Card.Body>
                  <Card.Title>{news.title}</Card.Title>
                  <Card.Text>
                    {/* working with the news character */}
                    {news.description}
                  </Card.Text>
                  <Card.Link className='link' href={news.url}>Read More</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
          </Row>
          {/* Working on the pagination */}
      </Container>
      
    </div>  

  )
}

export default News