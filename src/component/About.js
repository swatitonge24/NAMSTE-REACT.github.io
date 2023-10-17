import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import {Component}from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props)
        console.log
    }

    render(){
        return(
            <div>
                <h1>About Us</h1>
                <div>loggedIn User<UserContext.Consumer>
                    {({loggedInUser})=>(
                        <h1 className="font-bold">{loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
                </div>
                <h2>This is my Food Ordering React Application</h2>
                <UserClass name={"Swati Tonge(Class)"}location={"Dublin"}/>
            </div>
        )
    }
    
    
    
    
    
    
    
}
export default About;