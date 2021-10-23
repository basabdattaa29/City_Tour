import React from 'react'
import ProductData from '../product.json';
import { Link } from 'react-router-dom';

export const ProductCatagory = () => {
    return (
        <div>
            {
              ProductData.Product.map((prodValue)=>(
                  <Link to={`/productsubcatpage/${prodValue.p_name}`} key={prodValue.p_id}>  {prodValue.p_name}  </Link>
              )) 
            }
        </div>
    )
}
