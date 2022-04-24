import "./categories.css";
import Category from "./Category/Category";
import {Outlet, Link} from "react-router-dom"
import web3 from "./../../images/web3_icon.png"

const category_info = [
  {name:"web3",img: web3, header: "WEB 3.0 Projects", paragraph: "SOLIDITY, REACT"},
  {name:"react", img: web3, header: "REACT JS Projects", paragraph: "JSX, REACT"},
]




export default function Categories() {
  return (
    <div>
      <section className="categories">
        <div className="container categories__container">
          <div className="categories__left">
            <h1>Categories</h1>
            <p>Here you will find categories of projects</p>
            <a href="#" className="btn">
              Learn More
            </a>
          </div>
          <div className="categories__right">
            {category_info.map ((info) => (
              <Category name={info.name} img={info.img} header={info.header} paragraph={info.paragraph} />
            ))
            }
          </div>
        </div>
      </section>
      <Outlet />
    </div>
  );
}
