import React,{useEffect, useState} from 'react'
import './ItemDetails.css'
import { Button, Card, CardDeck } from 'react-bootstrap';
import axios from 'axios';

export const ItemDetails = ({match}) => {
    const[itemState, setItemState]=useState({
      ItemData:[]
    });
  const id=match.params.id
    useEffect(()=>{
      axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res=>{
        console.log(res);
        setItemState({ItemData:res.data});
    }).catch(err=>{
        console.log(err);
  })
  },[setItemState])
    return (
        <div className="container">
              <Card>
        <Card.Body>
      <Card.Title className="tot">  {itemState.ItemData.title}  </Card.Title>
      <Card.Text className="pri"> 
         {itemState.ItemData.price}
      </Card.Text> 
     </Card.Body>  
    <Card.Footer className="iti">
      {itemState.ItemData.description}
      <Button variant="primary" className="btn">Add To Cart</Button>
    </Card.Footer>
   </Card>

        </div>
    )
}
