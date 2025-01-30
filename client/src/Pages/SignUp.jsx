import { useState } from "react"

export const SignUp=()=>{
    const [user,setuser]=useState({
        name:'',
        email:'',
        password:'',
        phonenumber:''
    })
    const handleChange=(event)=>{
        setuser({...user,[event.target.name]:event.target.value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter name" name="name" onChange={handleChange} value={user.name}/><br />
            <input type="email" placeholder="enter email" name="email" onChange={handleChange} value={user.email}/><br />
            <input type="password" placeholder="enter password" name="password" onChange={handleChange} value={user.password}/><br />
            <input type="phonenumber" placeholder="enter phonenumber" name="phonenumber" onChange={handleChange} value={user.phonenumber}/><br />
            <button>SignUp</button>
        </form>
        </>
    )
}