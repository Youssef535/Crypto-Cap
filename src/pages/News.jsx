import { useState, useEffect, React } from 'react';
import { Container,Card,Col,Row } from 'react-bootstrap';
import axios from 'axios';




const News = () => {

  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  
  const newsAPI = async () =>{
    let {data} = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5fca490bd4d54b23a7143e2fbab1dea9');
    // eslint-disable-next-line no-lone-blocks
    { /*console.log("news",data);*/ }
    setNews(data.articles);
  }

  useEffect(() => {
    //componentDidMount
    newsAPI();
  }, [])
  if (!news) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Last News  </h1>
       {/* display all trending news  */}
      <Container>
        <Row>
          {news.map(news => (
            <Col key={news.title} md={4}>
              <Card className='bg-dark' style={{ margin:"10px", cursor:"pointer" }}>
                <Card.Img variant="top" src={news.urlToImage} />
                <Card.Body>
                  <Card.Title>{news.title}</Card.Title>
                  <Card.Text>
                    {news.description}
                  </Card.Text>
                  <Card.Link className='link' href={news.url}>Read More</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
      
    </div>  
   
  )
}

export default News