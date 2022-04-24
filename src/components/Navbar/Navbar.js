import "./navbar.css";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="container nav__container">
        
          <Link to="/"><h4>ALI M.</h4></Link>
        

        <ul className="nav__menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Tutorials</a>
          </li>
          <li>
            {/* <a href="">Comments</a> */}
            <Link to="/comments">Comments</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </nav>
  );
}
