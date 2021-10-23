import React from 'react'
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'


export const About = () => {
    return (
        
    <div>    
            <h1 className="text-center text-danger my-5px"> About  US </h1>
            <h5>Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, 
              and discover plugins for your favorite writing, design and blogging tools.
               Explore the origins, history and meaning of the famous passage, and learn how 
               Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text.</h5> 

    <div className="con">
        <div class="row">
        <div class="col">
    <Card>
    <Card.Img variant="top" src="../../../../Images/pic4.jpg"  height="115px"/>
      <Card.Body>
      <Card.Title>Welcome To The Jammu And Kashmir City Tour</Card.Title>
          <Card.Text>
          Jammu and Kashmir is home to several valleys such as the Kashmir Valley, Chenab Valley, Sindh Valley and Lidder Valley. Some major tourist attractions in Jammu and Kashmir are Srinagar, the Mughal Gardens, Gulmarg, Pahalgam, Patnitop and Jammu. Every year, thousands of Hindu pilgrims visit holy shrines of Vaishno Devi and Amarnath which has had significant impact on the state's economy
          </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div class="col">
    <Card>
    <Card.Img variant="top" src="../../../../Images/pic5.jpg"  height="115px"/>
        <Card.Body>
          <Card.Title>Welcome To The Jammu And Kashmir City Tour</Card.Title>
          <Card.Text>
          Kashmir Valley is one of the top tourist destinations of India.Gulmarg, one of the most popular ski resort destinations in India, is also home to the world's highest green golf course. Tourism has suffered a lot during past thirty years and it is still in mess
          </Card.Text>
        </Card.Body>
    </Card>
    </div>

    <div class="col">
    <Card>
    <Card.Img variant="top" src="../../../../Images/pic6.jpg"  height="115px"/>
        <Card.Body>
          <Card.Title>Welcome To The Jammu And Kashmir City Tour</Card.Title>
          <Card.Text>
          People associated with tourism and other private businesses are facing potential challenges and always suffer huge losses due to the unprecedented situation in the territory.
          </Card.Text>
      </Card.Body>
    </Card>
    </div>

<div class="col">
    <Card>
    <Card.Img variant="top" src="../../../../Images/pic7.jpg"  height="115px"/>
        <Card.Body>
          <Card.Title>Welcome To The Jammu And Kashmir City Tour</Card.Title>
          <Card.Text>
          Jammu and Kashmir is also famous for its scenic beauty, flower gardens, apple farms and more. It attracts tourists for its unique handicrafts and the world-famous Kashmiri Shawls
          </Card.Text> 
          </Card.Body>
          </Card>
          </div>
</div>

</div>
<p>For Further Inquiry Click Here</p>
<Link to={'/contact'}>Contact Us</Link>
  </div> 
     
     
 )
}
