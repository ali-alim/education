import Navbar from "../../components/Navbar/Navbar";
import "./reactnode.css";
import ReactNode from "../../components/Projects/ReactNode";
import monday_crm from "./../../images/monday_crm.png";
import tinder_clone from "./../../images/tinder_clone.png";

const react_node_info = [
  {
    img: monday_crm,
    header: "Monday CRM App",
    paragraph: "ReactJS, NodeJS, CRUD requests, useContext",
    link: "https://www.youtube.com/watch?v=DDh2GoiCrCk&list=PLRD1Niz0lz1sGLnQri-PlLARJRpGBL55m&index=5",
  },
  {
    img: tinder_clone,
    header: "Tinder Clone App",
    paragraph: "ReactJS, NodeJS, MongdoDB, Authentication, Cookies, Chat",
    link: "https://www.youtube.com/watch?v=Q70IMS-Qnjk&list=PLRD1Niz0lz1sGLnQri-PlLARJRpGBL55m&index=7",
  },


];

export default function reactJS() {
  return (
    <>
      <Navbar />
      <div className="projects">
        <h2>React & Node Projects</h2>
        <div className="container projects__container">
          {react_node_info.map((info) => (
            <ReactNode
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
