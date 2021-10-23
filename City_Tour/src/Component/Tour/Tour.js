import React from 'react'
import { Card, CardGroup, Row, Col, Button } from 'react-bootstrap'
import CityData from '../City.json'
import {Link} from 'react-router-dom'
import './Tour.css'

export const Tour = ({match}) => {
    const Value=CityData.City.find((data)=>data.c_name === match.params.pname);
   
    
    console.log("Value is:", Value);
    return (
      <div className="d"> 
      <CardGroup> 
        <Row>
      {
      Value.subcatogory.map((category)=>(
        <Col lg={3} md={3} sm={4} className="com">
        <Card className="card">

        <Card.Img variant="top" src={category.s_img} className="img"/>
        <Card.Body>
          <Card.Title>{category.s_name}</Card.Title> 
          <Card.Title>{category.s_des}</Card.Title>
          
            <Link to={`/tourdiff/${match.params.pname}/${category.s_name}`} className="butn">  </Link>
            
            
      </Card.Body>

    </Card> 
    </Col>
          )
          )
}
</Row>
    </CardGroup> 
     </div>
 )
}
