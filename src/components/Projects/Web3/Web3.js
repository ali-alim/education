import React from "react";
import jsmastery from "./../../../images/jsmastery_web3.png"

export default function Web3() {
  return (
    <>
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
    </>
  );
}
