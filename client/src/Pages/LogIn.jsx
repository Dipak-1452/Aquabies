import { useState } from "react";

export const LogIn=()=>{

    const [user,setuser]=useState({
        email:'',
        password:''
    });


    const handleChange=(event)=>{
    
        setuser({...user,[event.target.name]:event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Enter email:" onChange={handleChange} value={user.email} autoComplete="off" required/><br />
            <input type="password" name="password" placeholder="Enter password:" onChange={handleChange} value={user.password} autoComplete="off" required/><br />
            <button type="submit" >LogIn</button>
        </form>
        </>
    )
}