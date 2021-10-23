import React from 'react'
import CityData from '../City.json'
import { Card } from 'react-bootstrap';

export const Tourcatagory = ({match}) => {
    let CityName=CityData.City.find((data)=>data.c_name === match.params.pname)
    console.log("catagory", CityName);
    let CityDet=CityName.subcatagory.find((data)=>data.s_name === match.params.name)
    console.log("CityDetails is",CityDet);
    return (
        <div>
            <Card style={{ width: '18rem' }} className="c">
             <Card.Img variant="top" src={CityDet.c_images}  />
             <Card.Body>
             <Card.Title>{CityDet.s_name}</Card.Title>
             <Card.Title>{CityDet.s_images}</Card.Title>
             <Card.Title>{CityDet.s_description}</Card.Title>
              <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
               the card's content.
             </Card.Text>
             </Card.Body>
             </Card>
        </div>
    )
}
