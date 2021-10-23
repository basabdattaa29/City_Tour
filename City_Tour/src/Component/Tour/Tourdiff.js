import React from 'react'
import {Col,Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import catData from '../City.json'
import './Tourcatagory.css'

export const Tourdiff = () => {
    return (
        <div>
            <div>
            <Row>

      {
          catData.City.map((catValue)=>(
            <Col lg={6} md={6} sm={12} className="clm">

              <Link to={`/tour/${catValue.c_name}`}> <img src={catValue.c_image} className="i"/>

               <h6>{catValue.c_name} </h6>             
                 </Link>

       </Col>

    ))
      }
      </Row>
      </div>
        </div>
    )
}
