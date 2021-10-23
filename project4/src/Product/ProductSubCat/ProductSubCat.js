import React from 'react'
import ProductData from '../product.json';
import { Button, Card, CardGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductSubCat.css'

export const ProductSubCat = ({match}) => {
    let SubCatValue=ProductData.Product.find((data)=>data.p_name === match.params.pname);
    //p_name from product.json and pname from route
    console.log("SubCat value is", SubCatValue);
    
    return (
         <CardGroup >
           {
               SubCatValue.subCatagory.map((Product)=>(      
  <Card key={Product.s_id}>      
    <Card.Img variant="top" src={Product.s_img} />
    <Card.Body>
      <Card.Title>{Product.company}</Card.Title>
      <Button variant="warning">
      <Link to={`/productdetailspage/${match.params.pname}/${Product.s_id}`}>Learn More</Link>
      </Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  ))    
}
  </CardGroup>
      
        
    )
}
