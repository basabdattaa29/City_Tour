import React from 'react'
import { Fragment } from 'react';
import { useHistory } from 'react-router';

export const Contact = () => {
     //useHistory hooks give us access to the history instance without pulling ut from propd
    const history=useHistory();
    return (
        <Fragment>
          <h1>Contact With Us Anytime</h1>  
          <button onClick={()=>history.push('/aboutpage')}>Go To The About Page</button>
          </Fragment>
    )
}
