import Navbar from "../../components/Navbar/Navbar";
import "./web3.css";

import jsmastery from "./../../images/jsmastery_web3.png"

export default function web3() {
  return (
    <>
      <Navbar />
      <div className="projects">
        <h2>WEB 3.0 Projects</h2>
        <div className="container projects__container">
          <div className="project">
            <div className="project__image">
              <img src={jsmastery} alt="web3.0" />
            </div>
            <div className="project__info">
              <h4>Modern Web 3.0 Blockchain App</h4>
              <p>
                <b>Technologies used:</b>
                <br />
                SOLIDITY, SMART CONTRACTS, CRYPTO
              </p>
              <a
                href="https://www.youtube.com/watch?v=Wn_Kb3MR_cU"
                target="_blank"
                class="btn btn-primary"
              >
                Link to the video
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
