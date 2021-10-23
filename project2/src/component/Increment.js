import React, { Component } from 'react'

export default class Increment extends Component {
    shouldComponentUpdate(nextProps,nextState){
        console.log("Next Props:", nextProps);
        console.log("Next State", nextState);
        if(nextProps.data == this.props.data)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    render() {
        console.log("Increment");
        return (
            <div>
                <h1>{this.props.data}</h1>
                <button onClick={this.props.func}>Click</button>
            </div>
        )
    }
}
