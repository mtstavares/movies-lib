import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import "./NavBar.css"


const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib
        </Link>
      </h2>
      <div>
        <form>
          <input type="text" placeholder="Search for a movie..." />
          <button type="submit"><BiSearchAlt2 /></button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar
