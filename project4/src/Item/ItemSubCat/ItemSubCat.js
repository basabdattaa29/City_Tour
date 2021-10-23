import React,{useEffect, useState} from 'react'
import { Button, Card, CardGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


export const ItemSubCat = ({match}) => {
  const[itemState,setItemState]=useState({
    ItemData:[]
});
const subName= match.params.sub_name
// console.log(subName);
useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products/category/${subName}`)
  .then(res=>{
      console.log(res);
      setItemState({ItemData:res.data});
  }).catch(err=>{
      console.log(err);
})
},[setItemState])
    // let SubCatValue=ItemData.Item.find((data)=>data.p_name === match.params.pname);
    // //p_name from product.json and pname from route
    // console.log("SubCat value is", SubCatValue);
    
    return (
         <CardGroup>
           {
               itemState.ItemData.map((prod)=>(      
  <Card key={prod.id}>      
    <Card.Img variant="top" src={prod.image} />
    <Card.Body>
      <Card.Title>{prod.price}</Card.Title>
      <Button variant="warning">
      <Link to={`/itemdetails/${prod.id}`}>Details</Link>
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
