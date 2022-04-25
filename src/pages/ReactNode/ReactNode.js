import Navbar from "../../components/Navbar/Navbar";
import "./reactjs.css";
import ReactJS from "../../components/Projects/ReactJS";
import react_redux_toolkit from "./../../images/react_redux_toolkit.png";
import tesla from "./../../images/tesla.png";

const react_info = [
  {
    img: react_redux_toolkit,
    header: "React Cryptocurrency App",
    paragraph: "REACT, REDUX TOOLKIT, RAPID API",
    link: "https://www.youtube.com/watch?v=9DDX3US3kss&t=15s",
  },
  {
    img: tesla,
    header: "Tesla React.JS Website ",
    paragraph: "REACT, REDUX TOOLKIT, React-Router, Firebase",
    link: "https://www.youtube.com/watch?v=JnaTQudNDqg",
  },
];

export default function reactJS() {
  return (
    <>
      <Navbar />
      <div className="projects">
        <h2>React Projects</h2>
        <div className="container projects__container">
          {react_info.map((info) => (
            <ReactJS
              img={info.img}
              header={info.header}
              paragraph={info.paragraph}
              link={info.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}
