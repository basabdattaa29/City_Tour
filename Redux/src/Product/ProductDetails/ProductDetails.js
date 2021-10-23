import React from 'react'
import ProductData from '../product.json';
import { Card } from 'react-bootstrap';

export const ProductDetails = ({match}) => {
    let ProductName=ProductData.Product.find((data)=>data.p_name === match.params.pname)
    console.log("SubCat", ProductName);
    let ProductDet=ProductName.subCatagory.find((data)=>data.s_id === match.params.id)
    console.log("ProductDetails is",ProductDet);
    return (
        <div>
              <Card>
    <Card.Img variant="top" src={ProductDet.s_img} />
    <Card.Body>
      <Card.Title>{ProductDet.price}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
        </div>
    )
}
