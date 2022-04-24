import Navbar from "../../components/Navbar/Navbar";
import "./web3.css";

import Web3 from "../../components/Projects/Web3/Web3";

export default function web3() {
  return (
    <>
      <Navbar />
      <div className="projects">
        <h2>WEB 3.0 Projects</h2>
        <div className="container projects__container">
        <Web3 />
        </div>
      </div>
    </>
  );
}
