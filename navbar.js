import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{padding:"15px",background:"#1976d2"}}>
      <Link to="/" style={{color:"white",marginRight:"20px"}}>Login</Link>
      <Link to="/register" style={{color:"white"}}>Register</Link>
    </nav>
  );
}

export default Navbar;