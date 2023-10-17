import { useState } from "react";

const User =({name})=>{
    const [Count]= useState(0);
    const [Count1]=useState(1);

    return(
        <div className="user-card">
            <h2>Name:{name}</h2>
            <h2>Count:{Count}</h2>
            <h2>Count:{Count1}</h2>
            <h3>Location:Cork</h3>
            <h4>Contact:swatitonge24</h4>
        </div>
    )
}
export default User;