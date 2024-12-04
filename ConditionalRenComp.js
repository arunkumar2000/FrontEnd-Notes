import React, {Component} from "react";

class ConditionalRenComp extends Component{
    constructor(){
        super();
        this.state={
            isCond:true
        }
    }

    render(){
        let msg=" ";
        //1.use of is else
        if(!this.state.isCond){
            //return <h2>Admin login successful</h2>
            msg="Admin login";
        }
        else{
            //return <h2>User login successful</h2>
            msg="User login";
        }
        return <h2>{msg}</h2>
        //2.use of element as variable
        //
        //3.use of ternary operator
        
        
        
    }
}

export default ConditionalRenComp;