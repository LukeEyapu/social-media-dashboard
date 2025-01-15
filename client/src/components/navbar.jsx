import { Link } from "react-router-dom"

const navbar = () => {
  return (
    <div className="nav-bar">
        <Link to="/" className="nav-text">Home</Link>
        <div>
            <Link to="/register"><button type="submit"  className="nav-buttons">Register</button></Link>
            <Link to="/login"><button type="submit"  className="nav-buttons">Login</button></Link>
        </div>
    </div>
  )
}

export default navbar
