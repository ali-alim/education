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
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Tutorials</a>
            </li>
            <li>
              <a href="">Comments</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
