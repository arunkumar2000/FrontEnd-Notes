import React, {Component} from "react";

class MystateComp extends Component{

    constructor(){
        super();
        this.state={
            empName:"Rupesh",
            empSal:85000
        }
    }
    changeStateData =()=>{
        //this.setState({empName:"Rupesh S",empSal:this.state.empSal+5000});
        this.setState((prevState)=>({empName:"Rupesh S",empSal:this.state.empSal+5000}));
    }
    render()
    {   
        return (
        <div>
            <h2>This is my StateComp</h2>
            <p>Employee Name:<strong>{this.state.empName}</strong>and salary<strong>{this.state.empSal}</strong></p>

            <button type="button" onClick={()=>this.changeStateData()}>Change State data</button>

        </div>
    )}
}


export default MystateComp;

