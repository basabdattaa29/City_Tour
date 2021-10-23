import React, {Fragment} from 'react'
import { useParams, Redirect } from 'react-router'

export const Feedback = () => {
    const para=useParams();//collecting values from the url
    console.log(para);
    return (
        <Fragment>
            <h1>Feedback Component</h1>
            <h2>{para.myName}</h2>
             {para.myName!=="Harry"?<Redirect to="/aboutpage"/>:null} 
        </Fragment>

    )
}

//When we write "Harry" what is write in Header.js as an const name in Feedback.js as an para.myName what is coming from router.js
//its show in a Feedback url. it also show the display heading what we pass through the fragment.
//but when we write "John" as an para.myName it redirect to the about page nd show the display heading and url
