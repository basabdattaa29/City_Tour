import React, { Component } from 'react'
import Child from './D';
 class Child extends Component {
    
    render() {
        console.log("props:", this.props);
        return (
            <div>
                <h3>{this.props.children}</h3> 
              
            </div>
        )
    }
}
export default Child;