import mdn_logo from "./../../images/mdn_logo.png"
import "./tutorials.css"

export default function Tutorials() {
    
  return (
    <>
      <section className="tutorials">
        <h2>ALL TUTORIALS</h2>
        <div className="container tutorials__container">
        <a href="https://developer.mozilla.org/en-US/docs/Learn" target="_blank">
        <div className="tutorial">
            <div className="tutorial__top">
            <span className="tutorial__icon">
              <img src={mdn_logo} alt="mdn_icon" />
            </span>
            <h5>Developer Resources</h5>
            </div>
            <div className="tutorial__bottom"></div>
            <p>HTML, CSS, JavaScript</p>
          </div>
        </a>



        
        </div>
      </section>
    </>
  );
}
