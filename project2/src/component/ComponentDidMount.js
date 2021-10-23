import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
    state={
        data:"abc"
    }
    getData(){
        setTimeout(()=>{
          alert("Data Updated");
          this.setState({
              data:"ABCD"
        })  
        },6000)
    }
componentDidMount(){
    this.getData();
}
    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
            </div>
        )
    }
}
