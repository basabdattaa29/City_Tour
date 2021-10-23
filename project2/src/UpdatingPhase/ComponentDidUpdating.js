import React, { Component } from 'react'

export default class ComponentDidUpdating extends Component {
    state={
        active: false,
        name: null,
        email: null
    }
    componentDidUpdate(){
        console.warn('componentDidUpdate call')
        if(this.state.name == null && this.state.email == null){
            this.setState({
                name: "Basab",
                email: "basab19@gmail.com"
            });
        }
    }
    render() {
        console.warn('render call')
        return (
            <div>
                <h1> User Name: {this.state.name}</h1>
                <h1> User Email : {this.state.email}</h1>
                <button onClick={()=>{this.setState({active:true})}}> Get User Info</button>
            </div>
        )
    }
}
