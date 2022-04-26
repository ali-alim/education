import Navbar from "../../components/Navbar/Navbar";
import "./reactnext.css";
import ReactNext from "../../components/Projects/ReactNext";
import react_next from "./../../images/react_next.png";
import disney_clone from "./../../images/disney_clone.png";

const react_next_info = [
  {
    img: react_next,
    header: "Twitter ReactJS website",
    paragraph: "REACT, NEXT, Tailwing CSS, Firebase, NextAuth, Recoil",
    link: "https://www.youtube.com/watch?v=5Wak0iyGCrc",
  },
  {
    img: disney_clone,
    header: "Disney+ WebSite Next.js",
    paragraph: "React.JS, Next.JS, GraphQL, GraphCMS",
    link: "https://www.youtube.com/watch?v=u1ovHJXkPBY&list=PLRD1Niz0lz1sGLnQri-PlLARJRpGBL55m&index=9",
  },

];

export default function reactnext() {
  return (
    <>
      <Navbar />
      <div className="projects">
        <h2>React & Next Projects</h2>
        <div className="container projects__container">
          {react_next_info.map((info) => (
            <ReactNext
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
