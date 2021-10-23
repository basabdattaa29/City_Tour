import React, { Component } from 'react'

export default class ComponentWillUnmount extends Component {
    constructor(){
        super();
        this.state={
            toggleUser:true
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount call')
        alert('User has been deleted');
    }
    render() {
        return (
            <div>
                <header>
                    {
                        this.state.toggleUser?
                        <div>
                            <h1>User Name:Basabdattaa</h1>
                            <h1>Email: basabdattaaroy21@gmail.com</h1>
                        </div>: null
                    }
                    <button onClick={()=>{this.setState({toggleUser:false})}}>Delete User Info</button>
                </header>
            </div>
        )
    }
}

