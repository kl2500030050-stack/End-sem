import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

const navigate=useNavigate();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const login=()=>{

const data=JSON.parse(localStorage.getItem("user"));

if(data && data.email===email && data.password===password){

alert("Login Successful");

navigate("/dashboard");

}else{

alert("Invalid Email or Password");

}

};

return(

<div className="container">

<h2>Login</h2>

<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={login}>Login</button>

</div>

);

}

export default Login;