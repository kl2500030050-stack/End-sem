import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

const navigate = useNavigate();

const [user,setUser]=useState({
name:"",
email:"",
password:""
});

const handleChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value});
};

const register=()=>{

localStorage.setItem("user",JSON.stringify(user));

alert("Registration Successful");

navigate("/");

};

return(

<div className="container">

<h2>Register</h2>

<input
type="text"
name="name"
placeholder="Enter Name"
onChange={handleChange}
/>

<input
type="email"
name="email"
placeholder="Enter Email"
onChange={handleChange}
/>

<input
type="password"
name="password"
placeholder="Enter Password"
onChange={handleChange}
/>

<button onClick={register}>Register</button>

</div>

);

}

export default Register;