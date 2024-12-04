import React, {Component} from "react";

class ClassComp extends Component{

    render(){
        return (
        <div><h2>This is class Component</h2>
        <p>My name is <strong>{this.props.fname}</strong>, i am : <strong>{this.props.post}</strong></p>
        </div>
    );}
}

export default ClassComp;