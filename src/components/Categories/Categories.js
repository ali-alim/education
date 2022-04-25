import "./categories.css";
import Category from "./Category/Category";
import {Outlet, Link} from "react-router-dom"
import web3 from "./../../images/web3_icon.png"
import react from "./../../images/react_logo.jpg"
import react_node from "./../../images/react_node.png"
import react_next_logo from "./../../images/react_next_logo.png"

const category_info = [
  {name:"web3",img: web3, header: "WEB 3.0 Projects", paragraph: "SOLIDITY, REACT"},
  {name:"react", img: react, header: "REACT.JS Projects", paragraph: "JSX, REACT"},
  {name:"react_node", img: react_node, header: "REACT.JS & NODE.JS", paragraph: "REACT & NODE, useContext"},
  {name:"react_next", img: react_next_logo, header: "REACT.JS & NEXT.JS", paragraph: "REACT & NEXT, Tailwing CSS, Firebase v9, NextAuth, Recoil"},
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
