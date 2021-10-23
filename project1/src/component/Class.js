import React, { Component } from 'react';
import Class from './Class';
class Class extends Component {
constructor(){
super()
this.state={
    name:"Harry Potter",
    click=0
}
this.handelChange=this.handelChange.bind(this)
}
handelChange()
{
    this.setState({name:"Jerry", click:this.state.click+1})
}
    // state={
    //     name:"Harry Potter"
    // }
    //  val="Class Component";
    render() {
        return (
            
            <div>
                 <h1>{this.state.data}</h1>
                                {/* <Class>{this.state.name}</Class> */} */}
              {/* <h1>{this.val}</h1>   */}
              {/* <Child>{this.val}</Child> */}
              {/* <Class>{this.State.name}</Class> */}
              <button onClick={this.handelChange()}>Change</button>
            </div>
        )
    }
}

export default Class;