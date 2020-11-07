import React from 'react';
import Slider from './Components/Slider';
import Jumbotron from './Components/Jumbotron';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import ocean from './ocean.jpg';



export const Home = () => (
    <>
    <Slider />
    
    <Container style={{paddingTop:'2rem',paddingBottom:'2rem',textAlign:'center'}}>
        <Row>
            <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={ocean} />
                    <Card.Body>
                        <Card.Title>Web Dew Blog</Card.Title>
                        <Card.Text>
                            lorem insum dolor sit hamet lorem insum dolor sit hamet
                        </Card.Text>
                        <Button variant="outline-info">learn more</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={ocean} />
                    <Card.Body>
                        <Card.Title>Web Dew Blog</Card.Title>
                        <Card.Text>
                            lorem insum dolor sit hamet lorem insum dolor sit hamet
                        </Card.Text>
                        <Button variant="outline-info">learn more</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={ocean} />
                    <Card.Body>
                        <Card.Title>Web Dew Blog</Card.Title>
                        <Card.Text>
                            lorem insum dolor sit hamet lorem insum dolor sit hamet
                        </Card.Text>
                        <Button variant="outline-info">learn more</Button>
                    </Card.Body>
                </Card>
            </Col>
            
        </Row>
    </Container>
    
    <Jumbotron />
    
    <Container className="mb-4">
        <Row className="text-center">
            <Col md={7}>
                <img src={ocean} height={150} className="w-100" alt="text"/>
            </Col>
            <Col md={5}>
            <h3>web dev blog</h3>
                <p>lorem insum dolor sit hamet lorem insum dolor sit hamet lorem insum dolor sit hamet lorem insum dolor sit hamet</p>
            </Col>
        </Row>
    </Container>
    </>
    )