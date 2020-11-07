import React from 'react';
import { Carousel } from 'react-bootstrap';
import ocean from '../ocean.jpg';


export default function Slider() {
  return(
    <Carousel className="mt-5">
        <Carousel.Item>
            <img className="d-block w-100" src={ocean} alt="text" />
            <Carousel.Caption>
                <h3>Web Developer Blog</h3>
                <p>lorem insum dolor set hamet</p>
            </Carousel.Caption>
        
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={ocean} alt="text" />
            <Carousel.Caption>
                <h3>Web Developer Blog</h3>
                <p>lorem insum dolor set hamet</p>
            </Carousel.Caption>
        
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={ocean} alt="text" />
            <Carousel.Caption>
                <h3>Web Developer Blog</h3>
                <p>lorem insum dolor set hamet</p>
            </Carousel.Caption>
        
        </Carousel.Item>
        
    </Carousel>
)}
