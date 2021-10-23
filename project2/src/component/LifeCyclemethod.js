import React, { Component } from 'react'

export default class LifeCycleMethod extends Component {
    //First Method
    constructor(){
        super()
        console.log("constructor phase");
    }
  //Second Method
  static getDerivedStateFromProps(props,state){
      console.log("getdrived phase");
      return null;
  }  
  //Fourth Method
  componentDidMount(){
      console.log("component phase");
  }
  //Third Method
    render() {
        console.log("render phase");
        return (
            <div>
                <h1>Life Cycle Method Of Component</h1>
            </div>
        )
    }
}
