import Roadmap from "../../components/Roadmap";
import "./tutorials.css"
import mdn_logo from "./../../images/mdn_logo.png"
import react_logo from "./../../images/react_logo.jpg"
import js_logo from "./../../images/js_logo.png"

const roadmap_info = [
    {
        header:'How To Become a Highly Paid Blockchain Developer in 2022',
        link:'https://www.youtube.com/watch?v=uGPC9wNTBbw',
        author:'Dapp University'
    },

]

export default function Roadmaps() {
    
  return (
    <>
      <section className="tutorials">
        <h2>ROADMAPS</h2>
        <div className="container tutorials__container">
            {roadmap_info.map((roadmap) => (
                <Roadmap 
                header={roadmap.header}
                link={roadmap.link}
                author={roadmap.author}
                />
            ))}
        </div>
      </section>
    </>
  );
}
