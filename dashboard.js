function Dashboard(){

const user=JSON.parse(localStorage.getItem("user"));

return(

<div className="container">

<h1>Dashboard</h1>

<h3>Welcome {user?.name}</h3>

<p>Email : {user?.email}</p>

</div>

);

}

export default Dashboard;