import React, { useState } from "react";
import Admin from "../user/role/Admin";
import User from "../user/role/User";
import Trainee from "../user/role/Trainee";
// import Header from "../header/Header";

const Dashboard= ()=>{
    const [admin , setAdmin] = useState(false);
    const [user , setUser] = useState(false);
    const [trainee , setTrainee] = useState(false);
    return(
        <div>
          {/* <h1>Welcome to Dashboard page</h1> */}
            {/* <Header /> */}
            <button onClick = { () => {setAdmin(true); setUser(false);setTrainee(false)}} >Admin</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick = { () => {setAdmin(false); setUser(true);setTrainee(false)}} >User</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick = { () => {setAdmin(false); setUser(false);setTrainee(true)}} >Trainee</button>
            {admin && <Admin/>}
            {user && <User/>}
            {trainee && <Trainee/>}
        </div>
    );
}
export default Dashboard;