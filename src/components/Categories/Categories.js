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
                  <img src="" alt="blockchain_icon" />
                </span>
                <h5>WEB 3.0 Projects</h5>
                <p>Technologies used: SOLIDITY & REACT.js</p>
              </article>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
