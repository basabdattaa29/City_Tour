import React,{useEffect,useState} from 'react'
// import ItemData from '../product.json';
import { Link } from 'react-router-dom';
import axios from 'axios';
 

export const ItemCatagory = () => {
 const[itemState,setItemState]=useState({
     ItemData:[]
 });
 //useEffect=componentDidMount+componentDidUpdate
 useEffect(()=>{
     axios.get('https://fakestoreapi.com/products')
     .then(res=>{
      console.log("catagory:",res);
         setItemState({ItemData:res.data});
     }).catch(err=>{
         console.log(err);
})
 },[setItemState])
    return (
        <ul>
            {
            itemState.ItemData.map((prod)=>(
                <li key={prod.id}><Link to={`/itemSubCat/${prod.category}`}>{prod.title}</Link> </li>
                ))
            }
    
        </ul>
           
       
    )
}
