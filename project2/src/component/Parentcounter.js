import React, { Component } from 'react'
import Decrement from './Decrement'
import Increment from './Increment'

export default class Parentcounter extends Component {
    state={
        currentValue:0,
        preValue:0,
    }
    increment=()=>{
        this.setState({
            currentValue: this.state.currentValue+1,
            preValue: this.state.preValue
        })
    }
    decrement=()=>{
        this.setState({
        currentValue:this.state.currentValue,
        preValue:this.state.preValue-1
        })
    }
    render() {
        return (
            <div>
              <Increment data={this.state.currentValue}func={this.increment}/>
              <Decrement data={this.state.preValue}func={this.decrement}/>  
            </div>
        )
    }
}
