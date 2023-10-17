import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
       Count:0,
       
        }
    }

    render(){
        const{name,location}=this.props;
        const{Count}=this.state;
        return(
            <div className="user-card">
            <h2>Name:{name}</h2>
            <button onClick={()=>{
                this.setState({Count:this.state.Count+1,
                })

            }}>Count Increase</button>
            <h2>Count:{Count}</h2>
            
            <h3>Location:{location}</h3>
            <h4>Contact:swatitonge24</h4>
        </div>
        );
    }
}
export default UserClass;
