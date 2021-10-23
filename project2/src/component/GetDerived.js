import React, { Component } from 'react'

export default class GetDerived extends Component {
    state={
        favColorState:"red"
    }
    static getDerivedStateFromProps(props,state){
        if(state.favColorState !=props.favColor)
        console.log("Props value:", props);
        console.log("State value:",state);
        return{favColorState: props.favColor};
    }
    render() {
        return (
            <div>
                <h3>My Fav Color is {this.state.favColorState}</h3>
            </div>
        )
    }
}
