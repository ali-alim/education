import "./navbar.scss";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div class="container nav__container">
          <a href="index.html">
            <h4>ALI M.</h4>
          </a>

          <ul class="nav__menu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="projects.html">Projects</a>
            </li>
            <li>
              <a href="developers.html">Developers</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
