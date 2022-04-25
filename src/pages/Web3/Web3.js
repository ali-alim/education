import Navbar from "../../components/Navbar/Navbar";
import "./web3.css";
import Web3 from "../../components/Projects/Web3";
import jsmastery from "./../../images/jsmastery_web3.png";

const web3_info = [
  {
    img: jsmastery,
    header: "Modern Web 3.0 Blockchain App",
    paragraph: "SOLIDITY, SMART CONTRACTS, CRYPTO",
    link: "https://www.youtube.com/watch?v=Wn_Kb3MR_cU",
  },
];

export default function web3() {
  return (
    <>
      <Navbar />
      <div className="projects">
        <h2>WEB 3.0 Projects</h2>
        <div className="container projects__container">
          {/* <Web3 /> */}
          {web3_info.map((info) => (
            <Web3
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
