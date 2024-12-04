import React, {Component} from "react";

class EventComp extends Component{
    greeting=()=>{
        window.alert("Hello Everyone");
    };

    welcome=(...std)=>{
        window.alert(`Welcome you ${std}`);
    };

    render(){
        return (
        <div>
            <h2>EventComp</h2>
            <button type="button" onClick={()=>this.greeting()} className='btn btn-primary'>Call Greeting</button>
            <button type="button" onClick={()=>this.welcome("Tarun","Vinay")} className='btn btn-primary'>Call Welcome</button>
            {/* <h2 onMouseOver={()=>this.welcome("Madhav","Rahul","rupesh")}>Hover me call Welcome</h2> */}
        </div>
    );}
}

export default EventComp;