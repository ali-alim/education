import "./categories.scss";

export default function Categories() {
  return (
    <div>
      <section class="categories">
        <div class="container categories__container">
          <div class="categories__left">
            <h1>Categories</h1>
            <p>Here you will find categories of projects</p>
            <a href="#" class="btn">
              Learn More
            </a>
          </div>
          <div class="categories__right">
            <a href="./projects/web3.html">
              <article class="category">
                <span class="category__icon">
                  <img src="./assets//blockchain.jpg" alt="blockchain_icon" />
                </span>
                <h5>WEB 3.0 Projects</h5>
                <p>Technologies used: SOLIDITY & REACT.js</p>
              </article>
            </a>

            <article class="category">
              <span class="category__icon">
                <img src="./assets//vanilla_js.jpg" alt="vanilla_js_icon" />
              </span>
              <h5>Vanilla JS</h5>
              <p>Pure Javascript with HTML and CSS</p>
            </article>

            <a href="./projects/reactjs.html">
              <article class="category">
                <span class="category__icon">
                  <img src="./assets//react.jpg" alt="react_icon" />
                </span>
                <h5>React JS</h5>
                <p>One of the best Javascript Front-End Libraries</p>
              </article>
            </a>

            <article class="category">
              <span class="category__icon">
                <img src="./assets//blockchain.jpg" alt="blockchain_icon" />
              </span>
              <h5>Blockchain</h5>
              <p>Blockchain development is the future of web development</p>
            </article>

            <article class="category">
              <span class="category__icon">
                <img src="./assets//blockchain.jpg" alt="blockchain_icon" />
              </span>
              <h5>Blockchain</h5>
              <p>Blockchain development is the future of web development</p>
            </article>

            <article class="category">
              <span class="category__icon">
                <img src="./assets//blockchain.jpg" alt="blockchain_icon" />
              </span>
              <h5>Blockchain</h5>
              <p>Blockchain development is the future of web development</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
