import React from 'react'
import { Card ,Carousel,Button,Row,Col,CardGroup} from 'react-bootstrap'

export   const Home = () => {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../../../../Images/pic1.jpg"
      alt="First slide"
    />
        
    <Carousel.Caption>
      <h3>First slide </h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../../../../Images/pic2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../../../../Images/pic3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide </h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

)

}
